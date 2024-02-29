import type {
  Character,
  CharacterApiResponse,
  ResponseWithInfo,
} from "./types";

import { normalizeData } from "@/shared/lib/normalizeData";

export const isResponseWithInfo = (
  data: CharacterApiResponse
): data is ResponseWithInfo<Character> => "results" in data && "info" in data;

export const isMultipleResponse = (
  data: CharacterApiResponse
): data is Character[] => Array.isArray(data);

export const modifyCharacter = (character: Character): object => ({
  ...character,
  episode: character.episode.map((item) => Number(item.match(/\d+/g)?.pop())),
});

export const normalizeCharacters = (characters: Character[]) =>
  normalizeData(characters, ({ id }) => id, modifyCharacter);
