import type { Location, LocationFilters } from "../types";

import { BaseRequest } from "@/shared/api/baseRequest";
import { NormalizedData } from "@/shared/types/normalized-data";

class LocationAPI extends BaseRequest {
  getAll(filters?: LocationFilters) {
    return this.get<NormalizedData<Location>>("/", filters);
  }

  getMultiple(ids: number[]) {
    return this.get<Location[]>(`/${ids}`, null);
  }

  getSingle(id: number) {
    return this.get<Location>(`/${id}`, null);
  }
}

export const locationAPI = new LocationAPI({
  config: { baseURL: "/api/location" },
});
