export type Location = {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
};

export type ResponseWithInfo<T> = {
  info: unknown;
  results: T[];
};

export type LocationApiResponse =
  | Location
  | Location[]
  | ResponseWithInfo<Location>;
