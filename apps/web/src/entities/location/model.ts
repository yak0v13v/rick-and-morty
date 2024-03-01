import type { Location, LocationFilters } from "./types";

import { locationAPI } from "./api/locationApi";
import { createRmEntitie } from "@/shared/lib/createRmEntitie";
import { NormalizedData } from "@/shared/types/normalized-data";
import { createEffect } from "effector";

const allFx = createEffect<
  LocationFilters | undefined,
  NormalizedData<Location>,
  Error
>();
const multipleFx = createEffect<number[], NormalizedData<Location>, Error>();
const singleFx = createEffect<number, Location, Error>();

allFx.use(locationAPI.getAll);
multipleFx.use(locationAPI.getMultiple);
singleFx.use(locationAPI.getSingle);

export const $$episode = createRmEntitie<LocationFilters, Location>({
  allFx,
  multipleFx,
  singleFx,
});
