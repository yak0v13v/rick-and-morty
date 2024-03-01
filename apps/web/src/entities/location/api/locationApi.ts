import type { Location, LocationFilters } from "../types";

import { BaseRequest } from "@/shared/api/baseRequest";
import { ResponseWithInfo } from "@/shared/types/response-with-info";

class LocationAPI extends BaseRequest {
  getAll(filters?: LocationFilters) {
    return this.get<ResponseWithInfo<Location>>("/", filters);
  }

  getMultiple(ids: string | string[]) {
    return this.get<Location[]>(`/${ids}`, null);
  }

  getSingle(id: number) {
    return this.get<Location>(`/${id}`, null);
  }
}

export const locationAPI = new LocationAPI({
  config: { baseURL: "/api/location" },
});
