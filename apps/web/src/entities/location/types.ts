import { ResponseWithInfo } from "@/shared/types/response-with-info";

export type LocationRaw = {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
};

export type LocationRawApiResponse =
  | LocationRaw
  | LocationRaw[]
  | ResponseWithInfo<LocationRaw>;

export type Location = Omit<LocationRaw, "residents"> & {
  residents: number[];
};

export type LocationFilters = Partial<{
  dimension: string;
  name: string;
  type: string;
}>;
