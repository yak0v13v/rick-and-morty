import type { NormalizedData } from "../../types/normalized-data";

import { createQuery } from "@farfetched/core";
import { createEvent, createStore, Effect, sample } from "effector";

type Params<F, T> = {
  allFx: Effect<F | undefined, NormalizedData<T>, Error>;
  multipleFx: Effect<number[], NormalizedData<T>, Error>;
  singleFx: Effect<number, T, Error>;
};

const createRmEntitie = <F, T>({
  allFx,
  multipleFx,
  singleFx,
}: Params<F, T>) => {
  const fetchMultiple = createEvent<number[]>();
  const fetchSingle = createEvent<number>();

  const allQuery = createQuery({ effect: allFx });
  const multipleQuery = createQuery({ effect: multipleFx });
  const singleQuery = createQuery({ effect: singleFx });

  const $data = createStore<Record<number, T>>({});

  $data.on(
    [allQuery.finished.success, multipleQuery.finished.success],
    (state, { result: { data } }) => ({
      ...state,
      ...data,
    })
  );

  $data.on(singleQuery.finished.success, (state, { params, result }) => ({
    ...state,
    [params]: result,
  }));

  sample({
    clock: fetchSingle,
    filter: (data, id) => !data[id],
    fn: (_, id) => id,
    source: $data,
    target: singleQuery.start,
  });

  sample({
    clock: fetchMultiple,
    filter: (data, ids) => !ids.every((id) => !!data[id]),
    fn: (data, ids) => ids.filter((id) => !data[id]),
    source: $data,
    target: multipleQuery.start,
  });

  return {
    $data,
    allQuery,
    fetchMultiple,
    fetchSingle,
    multipleQuery,
    singleQuery,
  };
};

export { createRmEntitie };
