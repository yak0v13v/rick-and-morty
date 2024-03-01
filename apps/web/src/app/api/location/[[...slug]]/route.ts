import type { LocationRawApiResponse } from "@/entities/location/types";

import {
  isMultipleResponse,
  isResponseWithInfo,
  modifyLocation,
  normalizeLocations,
} from "./utils";
import axios from "axios";

export async function GET(
  request: Request,
  { params }: { params: { slug?: string[] } }
) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const episode = searchParams.get("status");

  const apiParameter = params?.slug?.[0] ? `/${params.slug[0]}` : "";
  const url = "https://rickandmortyapi.com/api/location" + apiParameter;

  const { data } = await axios.get<LocationRawApiResponse>(url, {
    params: {
      episode,
      name,
    },
    timeout: 7000,
  });

  if (isResponseWithInfo(data)) {
    const normalized = normalizeLocations(data.results);
    return Response.json(normalized);
  }

  if (isMultipleResponse(data)) {
    const normalized = normalizeLocations(data);
    return Response.json(normalized);
  }

  return Response.json(modifyLocation(data));
}
