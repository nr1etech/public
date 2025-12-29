import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {
  BatchWriteCommand,
  DeleteCommand,
  PutCommand,
  QueryCommand,
  UpdateCommand,
  GetCommand,
  QueryCommandInput,
} from '@aws-sdk/lib-dynamodb';
import type {Adapter, DatabaseSession, DatabaseUser} from 'lucia';

const MAX_BATCH_SIZE = 25;

/**
 * Function to retrieve a user.
 */
export type GetUserFn = (
  userId: string,
  client: DynamoDBClient,
) => Promise<DatabaseUser | null>;

/**
 * Properties for DynamoDBAdapter.
 */
export interface DynamoDBAdapterProps {
  /**
   * The DynamoDB Document Client to use. Can be any AWS SDK v3 DynamoDB Document Client.
   */
  client: DynamoDBClient;

  /**
   * The name of the DynamoDB table to use. Default is 'LuciaAuthTable'.
   */
  tableName?: string;

  /**
   * Extra attributes to exclude from the user object. Default is an empty array.
   */
  extraUserAttributes?: string[];

  /**
   * Extra attributes to exclude from the session object. Default is an empty array.
   */
  extraSessionAttributes?: string[];

  /**
   * Overrides the default implementation to retrieve user data.
   *
   * @param client the DynamoDBClient
   * @param userId the user ID
   */
  getUser: GetUserFn;

  /**
   * Whether to use consistent read when querying the table during getSessionAndUser. Default is false.
   */
  consistentRead?: boolean;
}

/**
 * Adapter using two GSIs
 */
export class DynamoDBAdapter implements Adapter {
  protected client: DynamoDBClient;
  protected tableName: string = 'LuciaAuthTable';
  protected getUser: GetUserFn;
  protected consistentRead: boolean;

  constructor(options: DynamoDBAdapterProps) {
    this.client = options.client;
    if (options.tableName) this.tableName = options.tableName;
    this.getUser = options.getUser;
    this.consistentRead = options?.consistentRead ?? false;
  }

  public async deleteSession(sessionId: string): Promise<void> {
    await this.client.send(
      new DeleteCommand({
        TableName: this.tableName,
        Key: {
          sid: sessionId,
        },
      }),
    );
  }

  protected async deleteSessions(
    commandInput: QueryCommandInput,
  ): Promise<void> {
    let _lastEvaluatedKey: Record<string, unknown> | undefined = undefined;
    const keys = [];

    // query keys
    do {
      if (_lastEvaluatedKey) commandInput.ExclusiveStartKey = _lastEvaluatedKey;
      const res = await this.client.send(new QueryCommand(commandInput));
      if (res?.Items?.length) {
        keys.push(
          ...res.Items.map((item: Record<string, unknown>) => ({
            sid: item.sid,
          })),
        );
      }
      _lastEvaluatedKey = res?.LastEvaluatedKey;

      // delete all keys
      for (let i = 0; i < keys.length; i += MAX_BATCH_SIZE) {
        const batch = keys.slice(i, i + MAX_BATCH_SIZE);
        await this.client.send(
          new BatchWriteCommand({
            RequestItems: {
              [this.tableName]: batch.map((key) => ({
                DeleteRequest: {Key: key},
              })),
            },
          }),
        );
      }
    } while (_lastEvaluatedKey);
  }

  public async deleteUserSessions(userId: string): Promise<void> {
    await this.deleteSessions({
      TableName: this.tableName,
      IndexName: 'Gs1',
      KeyConditionExpression: '#uid = :uid',
      ExpressionAttributeNames: {
        '#uid': 'uid',
        '#sid': 'sid',
      },
      ExpressionAttributeValues: {
        ':uid': userId,
      },
      Select: 'SPECIFIC_ATTRIBUTES',
      ProjectionExpression: '#sid',
    });
  }

  public async getSessionAndUser(
    sessionId: string,
  ): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> {
    const sessionRes = await this.client.send(
      new GetCommand({
        TableName: this.tableName,
        Key: {
          sid: sessionId,
        },
        ConsistentRead: this.consistentRead,
      }),
    );
    if (!sessionRes.Item) return [null, null];
    const session = this.itemToSession(sessionRes.Item);
    const user: DatabaseUser | null = await this.getUser(
      session.userId,
      this.client,
    );
    return [session, user];
  }

  public async getUserSessions(userId: string): Promise<DatabaseSession[]> {
    const sessions: DatabaseSession[] = [];
    let _lastEvaluatedKey: Record<string, unknown> | undefined = undefined;

    do {
      const commandInput: QueryCommandInput = {
        TableName: this.tableName,
        IndexName: 'Gs1',
        ExpressionAttributeNames: {
          '#uid': 'uid',
        },
        ExpressionAttributeValues: {
          ':uid': userId,
        },
        KeyConditionExpression: '#uid = :uid',
      };
      if (_lastEvaluatedKey) commandInput.ExclusiveStartKey = _lastEvaluatedKey;
      const res = await this.client.send(new QueryCommand(commandInput));
      if (res?.Items?.length) {
        sessions.push(
          ...res.Items.map((x: Record<string, unknown>) =>
            this.itemToSession(x),
          ),
        );
      }
      _lastEvaluatedKey = res?.LastEvaluatedKey;
    } while (_lastEvaluatedKey);
    return sessions;
  }

  public async setSession(databaseSession: DatabaseSession): Promise<void> {
    const expires = Math.floor(databaseSession.expiresAt.getTime() / 1000);
    await this.client.send(
      new PutCommand({
        TableName: this.tableName,
        Item: {
          sid: databaseSession.id,
          uid: databaseSession.userId,
          exp: expires,
          typ: 'Session',
          attrs: databaseSession.attributes,
        },
      }),
    );
  }

  public async updateSessionExpiration(
    sessionId: string,
    expiresAt: Date,
  ): Promise<void> {
    if (expiresAt.getTime() > Date.now()) {
      const expires = Math.floor(expiresAt.getTime() / 1000);
      // update the session
      await this.client.send(
        new UpdateCommand({
          TableName: this.tableName,
          Key: {
            sid: sessionId,
          },
          UpdateExpression: 'SET #exp = :exp',
          ConditionExpression: '#sid = :sid',
          ExpressionAttributeNames: {
            '#sid': 'sid',
            '#exp': 'exp',
          },
          ExpressionAttributeValues: {
            ':exp': expires,
            ':sid': sessionId,
          },
        }),
      );
    } else {
      await this.deleteSession(sessionId);
    }
  }

  public async deleteExpiredSessions(): Promise<void> {
    await this.deleteSessions({
      TableName: this.tableName,
      IndexName: 'Gs2',
      ExpressionAttributeNames: {
        '#sid': 'sid',
        '#exp': 'exp',
        '#typ': 'typ',
      },
      ExpressionAttributeValues: {
        ':typ': 'Session',
        ':exp': Math.floor(new Date().getTime() / 1000),
      },
      KeyConditionExpression: '#typ = :typ AND #exp < :exp',
      Select: 'SPECIFIC_ATTRIBUTES',
      ProjectionExpression: '#sid',
    });
  }

  private itemToSession(item: Record<string, unknown>): DatabaseSession {
    return {
      id: item.sid as string,
      userId: item.uid as string,
      expiresAt: new Date((item.exp as number) * 1000),
      attributes: item.attrs as Record<string, unknown>,
    };
  }
}
