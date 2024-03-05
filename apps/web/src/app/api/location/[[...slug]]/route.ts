import type { LocationRawApiResponse } from "@/entities/location/types";

import {
  isMultipleResponse,
  isResponseWithInfo,
  modifyLocation,
  normalizeLocations,
} from "./utils";
import axios, { AxiosError } from "axios";

export async function GET(
  request: Request,
  { params }: { params: { slug?: string[] } }
) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const episode = searchParams.get("status");

  const apiParameter = params?.slug?.[0] ? `/${params.slug[0]}` : "";
  const url = "https://rickandmortyapi.com/api/location" + apiParameter;

  try {
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
  } catch (error) {
    if (error instanceof AxiosError) {
      return Response.json(error.response?.data, {
        status: error.response?.status,
      });
    }
  }
}
