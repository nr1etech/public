import { USPSClient } from "../client.mjs";

export type GetCityStateInput = {
  ZIPCode: string;
};

export type CityStateResponse = {
  city: string;
  state: string;
  ZIPCode: string;
};

export async function getCityState(
  client: USPSClient,
  input: GetCityStateInput,
): Promise<CityStateResponse> {
  return client.get<CityStateResponse>({
    path: "/addresses/v3/city-state",
    params: {
      ZIPCode: input.ZIPCode,
    },
  });
}
