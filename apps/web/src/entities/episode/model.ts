import type { Episode, EpisodeFilters } from "./types";

import { episodeAPI } from "./api/episodeApi";
import { createRmEntitie } from "@/shared/lib/createRmEntitie";
import { NormalizedData } from "@/shared/types/normalized-data";
import { createEffect } from "effector";

const allFx = createEffect<
  EpisodeFilters | undefined,
  NormalizedData<Episode>,
  Error
>();
const multipleFx = createEffect<number[], NormalizedData<Episode>, Error>();
const singleFx = createEffect<number, Episode, Error>();

allFx.use(episodeAPI.getAll);
multipleFx.use(episodeAPI.getMultiple);
singleFx.use(episodeAPI.getSingle);

export const $$episode = createRmEntitie<EpisodeFilters, Episode>({
  allFx,
  multipleFx,
  singleFx,
});
