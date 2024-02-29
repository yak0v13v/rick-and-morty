import { CharacterApiResponse } from "./types";
import {
  isMultipleResponse,
  isResponseWithInfo,
  modifyCharacter,
  normalizeCharacters,
} from "./utils";
import axios from "axios";

export async function GET(
  request: Request,
  { params }: { params: { slug?: string[] } }
) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const species = searchParams.get("species");
  const type = searchParams.get("type");
  const gender = searchParams.get("gender");

  const apiParameter = params?.slug?.[0] ? `/${params.slug[0]}` : "";
  const url = "https://rickandmortyapi.com/api/character" + apiParameter;

  const { data } = await axios.get<CharacterApiResponse>(url, {
    params: {
      gender,
      name,
      species,
      status,
      type,
    },
    timeout: 7000,
  });

  if (isResponseWithInfo(data)) {
    const normalized = normalizeCharacters(data.results);
    return Response.json(normalized);
  }

  if (isMultipleResponse(data)) {
    const normalized = normalizeCharacters(data);
    return Response.json(normalized);
  }

  return Response.json(modifyCharacter(data));
}
