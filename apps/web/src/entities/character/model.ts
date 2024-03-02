import type { Character, CharacterFilters } from "./types";

import { characterAPI } from "./api/characterApi";
import { createRmEntitie } from "@/shared/lib/factories";
import { NormalizedData } from "@/shared/types/normalized-data";
import { createEffect } from "effector";

const allFx = createEffect<
  CharacterFilters | undefined,
  NormalizedData<Character>,
  Error
>();
const multipleFx = createEffect<number[], NormalizedData<Character>, Error>();
const singleFx = createEffect<number, Character, Error>();

allFx.use(characterAPI.getAll);
multipleFx.use(characterAPI.getMultiple);
singleFx.use(characterAPI.getSingle);

export const $$character = createRmEntitie<CharacterFilters, Character>({
  allFx,
  multipleFx,
  singleFx,
});
