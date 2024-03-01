import { ResponseWithInfo } from "@/shared/types/response-with-info";

export type CharacterRaw = {
  created: string;
  episode: string[];
  gender: Gender;
  id: number;
  img: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: Species;
  status: Status;
  type: string;
  url: string;
};

type Species = "Alien" | "Human";
type Status = "Alive" | "unknown";
type Gender = "Female" | "Male";

export type CharacterRawApiResponse =
  | CharacterRaw
  | CharacterRaw[]
  | ResponseWithInfo<CharacterRaw>;

export type Character = Omit<CharacterRaw, "episode"> & {
  episode: number[];
};

export type CharacterFilters = Partial<{
  gender: string;
  name: string;
  species: Species;
  status: Status;
  type: string;
}>;
