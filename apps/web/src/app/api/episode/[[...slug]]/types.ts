export type Episode = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type ResponseWithInfo<T> = {
  info: unknown;
  results: T[];
};

export type EpisodeApiResponse =
  | Episode
  | Episode[]
  | ResponseWithInfo<Episode>;
