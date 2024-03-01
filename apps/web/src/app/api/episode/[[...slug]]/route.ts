import type { EpisodeRawApiResponse } from "@/entities/episode/types";

import {
  isMultipleResponse,
  isResponseWithInfo,
  modifyEpisode,
  normalizeEpisodes,
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
  const url = "https://rickandmortyapi.com/api/episode" + apiParameter;

  const { data } = await axios.get<EpisodeRawApiResponse>(url, {
    params: {
      episode,
      name,
    },
    timeout: 7000,
  });

  if (isResponseWithInfo(data)) {
    const normalized = normalizeEpisodes(data.results);
    return Response.json(normalized);
  }

  if (isMultipleResponse(data)) {
    const normalized = normalizeEpisodes(data);
    return Response.json(normalized);
  }

  return Response.json(modifyEpisode(data));
}
