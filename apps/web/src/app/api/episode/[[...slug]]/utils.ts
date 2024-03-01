import type {
  EpisodeRaw,
  EpisodeRawApiResponse,
} from "@/entities/episode/types";
import type { ResponseWithInfo } from "@/shared/types/response-with-info";

import { normalizeData } from "@/shared/lib/normalizeData";

export const isResponseWithInfo = (
  data: EpisodeRawApiResponse
): data is ResponseWithInfo<EpisodeRaw> => "results" in data && "info" in data;

export const isMultipleResponse = (
  data: EpisodeRawApiResponse
): data is EpisodeRaw[] => Array.isArray(data);

export const modifyEpisode = (episode: EpisodeRaw): object => ({
  ...episode,
  characters: episode.characters.map((item) =>
    Number(item.match(/\d+/g)?.pop())
  ),
});

export const normalizeEpisodes = (episode: EpisodeRaw[]) =>
  normalizeData(episode, ({ id }) => id, modifyEpisode);
