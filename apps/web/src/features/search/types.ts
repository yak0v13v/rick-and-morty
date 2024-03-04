import { Character } from "@/entities/character/types";
import { Episode } from "@/entities/episode/types";
import { NormalizedData } from "@/shared/types/normalized-data";
import { AxiosError } from "axios";

export type SuggestionsPayload = {
  error: AxiosError<unknown> | null;
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
