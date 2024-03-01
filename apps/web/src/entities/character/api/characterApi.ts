import type { Character, CharacterFilters } from "../types";

import { BaseRequest } from "@/shared/api/baseRequest";
import { ResponseWithInfo } from "@/shared/types/response-with-info";

class CharacterAPI extends BaseRequest {
  getAll(filters?: CharacterFilters) {
    return this.get<ResponseWithInfo<Character>>("/", filters);
  }

  getMultiple(ids: string | string[]) {
    return this.get<Character[]>(`/${ids}`, null);
  }

  getSingle(id: number) {
    return this.get<Character>(`/${id}`, null);
  }
}

export const characterAPI = new CharacterAPI({
  config: { baseURL: "/api/character" },
});
