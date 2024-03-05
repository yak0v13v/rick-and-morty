import { GetSuggestionsParams } from "../types";
import { Character } from "@/entities/character/types";
import { Episode } from "@/entities/episode/types";
import { BaseRequest } from "@/shared/api/baseRequest";
import { NormalizedData } from "@/shared/types/normalized-data";

class SearchAPI extends BaseRequest {
  getSuggestions = ({ category, search }: GetSuggestionsParams) => {
    return this.get<NormalizedData<Character | Episode | Location>>(
      `/${category}`,
      { name: search }
    );
  };
}

export const searchApi = new SearchAPI({
  config: {
    baseURL: "/api",
  },
});
