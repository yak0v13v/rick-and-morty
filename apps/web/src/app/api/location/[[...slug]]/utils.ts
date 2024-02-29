import { Location, LocationApiResponse, ResponseWithInfo } from "./types";
import { normalizeData } from "@/shared/lib/normalizeData";

export const isResponseWithInfo = (
  data: LocationApiResponse
): data is ResponseWithInfo<Location> => "results" in data && "info" in data;

export const isMultipleResponse = (
  data: LocationApiResponse
): data is Location[] => Array.isArray(data);

export const modifyLocation = (location: Location): object => ({
  ...location,
  residents: location.residents.map((item) =>
    Number(item.match(/\d+/g)?.pop())
  ),
});

export const normalizeLocations = (locations: Location[]) =>
  normalizeData(locations, ({ id }) => id, modifyLocation);
