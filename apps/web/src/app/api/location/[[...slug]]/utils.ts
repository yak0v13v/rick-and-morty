import type {
  LocationRaw,
  LocationRawApiResponse,
} from "@/entities/location/types";
import type { ResponseWithInfo } from "@/shared/types/response-with-info";

import { normalizeData } from "@/shared/lib/normalizeData";

export const isResponseWithInfo = (
  data: LocationRawApiResponse
): data is ResponseWithInfo<LocationRaw> => "results" in data && "info" in data;

export const isMultipleResponse = (
  data: LocationRawApiResponse
): data is LocationRaw[] => Array.isArray(data);

export const modifyLocation = (location: LocationRaw): object => ({
  ...location,
  residents: location.residents.map((item) =>
    Number(item.match(/\d+/g)?.pop())
  ),
});

export const normalizeLocations = (locations: LocationRaw[]) =>
  normalizeData(locations, ({ id }) => id, modifyLocation);
