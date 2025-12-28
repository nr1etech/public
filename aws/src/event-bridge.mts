import {EventBridgeClient, PutEventsCommand} from '@aws-sdk/client-eventbridge';

let eventBridgeClient: EventBridgeClient | undefined = undefined;

export function getEventBridgeClient(region?: string): EventBridgeClient {
  if (eventBridgeClient) return eventBridgeClient;
  eventBridgeClient = new EventBridgeClient({region});
  return eventBridgeClient;
}

export async function sendEvent(
  eventBusName: string,
  source: string,
  detailType: string,
  detail: unknown,
  region?: string,
) {
  const client = getEventBridgeClient(region);
  const command = new PutEventsCommand({
    Entries: [
      {
        Source: source,
        DetailType: detailType,
        Detail: JSON.stringify(detail),
        EventBusName: eventBusName,
      },
    ],
  });
  return await client.send(command);
}

export interface EventBridgeEvent {
  source: string;
  detailType: string;
  detail: unknown;
}

export async function sendEvents(
  eventBusName: string,
  events: EventBridgeEvent[],
  region?: string,
) {
  const client = getEventBridgeClient(region);
  const command = new PutEventsCommand({
    Entries: events.map((event) => ({
      Source: event.source,
      DetailType: event.detailType,
      Detail: JSON.stringify(event.detail),
      EventBusName: eventBusName,
    })),
  });
  return await client.send(command);
}
