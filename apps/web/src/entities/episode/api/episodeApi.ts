import type { Episode, EpisodeFilters } from "../types";

import { BaseRequest } from "@/shared/api/baseRequest";
import { ResponseWithInfo } from "@/shared/types/response-with-info";

class EpisodeAPI extends BaseRequest {
  getAll(filters?: EpisodeFilters) {
    return this.get<ResponseWithInfo<Episode>>("/", filters);
  }

  getMultiple(ids: string | string[]) {
    return this.get<Episode[]>(`/${ids}`, null);
  }

  getSingle(id: number) {
    return this.get<Episode>(`/${id}`, null);
  }
}

export const episodeAPI = new EpisodeAPI({
  config: { baseURL: "/api/episode" },
});
