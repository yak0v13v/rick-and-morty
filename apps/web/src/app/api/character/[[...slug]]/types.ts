export type Character = {
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

export type ResponseWithInfo<T> = {
  info: unknown;
  results: T[];
};

export type CharacterApiResponse =
  | Character
  | Character[]
  | ResponseWithInfo<Character>;
