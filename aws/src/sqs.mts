import {SendMessageCommand, SQSClient} from '@aws-sdk/client-sqs';

const clients: Record<string, SQSClient> = {};

export function getSQSClient(region?: string) {
  let client = clients[region ?? 'unspecified'];
  if (!client) {
    client = new SQSClient({region});
    clients[region ?? 'unspecified'] = client;
  }
  return client;
}

export async function sendMessage(
  queueUrl: string,
  messageBody: string,
  region?: string,
) {
  await getSQSClient(region).send(
    new SendMessageCommand({
      QueueUrl: queueUrl,
      MessageBody: messageBody,
    }),
  );
}
