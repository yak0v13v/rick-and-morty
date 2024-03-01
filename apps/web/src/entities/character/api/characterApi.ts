import type { Character, CharacterFilters } from "../types";

import { BaseRequest } from "@/shared/api/baseRequest";
import { NormalizedData } from "@/shared/types/normalized-data";

class CharacterAPI extends BaseRequest {
  getAll(filters?: CharacterFilters) {
    return this.get<NormalizedData<Character>>("/", filters);
  }

  getMultiple(ids: number[]) {
    return this.get<Character[]>(`/${ids}`, null);
  }

  getSingle(id: number) {
    return this.get<Character>(`/${id}`, null);
  }
}

export const characterAPI = new CharacterAPI({
  config: { baseURL: "/api/character" },
});
