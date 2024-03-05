import type { Character, CharacterFilters } from "../types";

import { BaseRequest } from "@/shared/api/baseRequest";
import { NormalizedData } from "@/shared/types/normalized-data";

class CharacterAPI extends BaseRequest {
  getAll = (filters?: CharacterFilters) =>
    this.get<NormalizedData<Character>>("/", filters);

  getMultiple = (ids: number[]) =>
    this.get<NormalizedData<Character>>(`/[${ids}]`, null);

  getSingle = (id: number) => this.get<Character>(`/${id}`, null);
}

export const characterAPI = new CharacterAPI({
  config: { baseURL: "/api/character" },
});
