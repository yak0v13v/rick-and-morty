import type {
  CharacterRaw,
  CharacterRawApiResponse,
} from "@/entities/character/types";
import type { ResponseWithInfo } from "@/shared/types/response-with-info";

import { normalizeData } from "@/shared/lib/normalizeData";

export const isResponseWithInfo = (
  data: CharacterRawApiResponse
): data is ResponseWithInfo<CharacterRaw> =>
  "results" in data && "info" in data;

export const isMultipleResponse = (
  data: CharacterRawApiResponse
): data is CharacterRaw[] => Array.isArray(data);

export const modifyCharacter = (character: CharacterRaw): object => ({
  ...character,
  episode: character.episode.map((item) => Number(item.match(/\d+/g)?.pop())),
});

export const normalizeCharacters = (characters: CharacterRaw[]) =>
  normalizeData(characters, ({ id }) => id, modifyCharacter);
