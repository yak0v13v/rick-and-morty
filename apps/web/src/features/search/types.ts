import { type Character } from "@/entities/character";
import { type Episode } from "@/entities/episode";
import { NormalizedData } from "@/shared/types/normalized-data";
import { AxiosError } from "axios";

export type SuggestionsPayload = {
  error: AxiosError<unknown> | null | unknown;
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
