import type { Episode, EpisodeFilters } from "../types";

import { BaseRequest } from "@/shared/api/baseRequest";
import { NormalizedData } from "@/shared/types/normalized-data";

class EpisodeAPI extends BaseRequest {
  getAll(filters?: EpisodeFilters) {
    return this.get<NormalizedData<Episode>>("/", filters);
  }

  getMultiple(ids: number[]) {
    return this.get<Episode[]>(`/${ids}`, null);
  }

  getSingle(id: number) {
    return this.get<Episode>(`/${id}`, null);
  }
}

export const episodeAPI = new EpisodeAPI({
  config: { baseURL: "/api/episode" },
});
