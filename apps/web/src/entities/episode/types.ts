import { ResponseWithInfo } from "@/shared/types/response-with-info";

export type EpisodeRaw = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type EpisodeRawApiResponse =
  | EpisodeRaw
  | EpisodeRaw[]
  | ResponseWithInfo<EpisodeRaw>;

export type Episode = Omit<EpisodeRaw, "characters"> & {
  characters: number[];
};
