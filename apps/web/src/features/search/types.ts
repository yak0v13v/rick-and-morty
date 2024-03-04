import { Character } from "@/entities/character/types";
import { Episode } from "@/entities/episode/types";
import { NormalizedData } from "@/shared/types/normalized-data";

export type SuggestionsPayload = {
  error: unknown;
  pending: boolean;
  result: NormalizedData<Character | Episode | Location> | null;
};

export type Suggestions = {
  [category: string]: {
    [search: string]: SuggestionsPayload;
  };
};

export type GetSuggestionsParams = {
  category: string;
  search: string;
};
