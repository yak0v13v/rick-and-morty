import { Episode, EpisodeApiResponse, ResponseWithInfo } from "./types";
import { normalizeData } from "@/shared/lib/normalizeData";

export const isResponseWithInfo = (
  data: EpisodeApiResponse
): data is ResponseWithInfo<Episode> => "results" in data && "info" in data;

export const isMultipleResponse = (
  data: EpisodeApiResponse
): data is Episode[] => Array.isArray(data);

export const modifyEpisode = (episode: Episode): object => ({
  ...episode,
  characters: episode.characters.map((item) =>
    Number(item.match(/\d+/g)?.pop())
  ),
});

export const normalizeEpisodes = (episode: Episode[]) =>
  normalizeData(episode, ({ id }) => id, modifyEpisode);
