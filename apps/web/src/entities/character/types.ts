import { ResponseWithInfo } from "@/shared/types/response-with-info";

export type CharacterRaw = {
  created: string;
  episode: string[];
  gender: "Female" | "Male";
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
  species: "Alien" | "Human";
  status: "Alive" | "unknown";
  type: string;
  url: string;
};

export type CharacterRawApiResponse =
  | CharacterRaw
  | CharacterRaw[]
  | ResponseWithInfo<CharacterRaw>;

export type Character = Omit<CharacterRaw, "episode"> & {
  episode: number[];
};
