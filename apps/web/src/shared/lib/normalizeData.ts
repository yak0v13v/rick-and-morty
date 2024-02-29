const normalizeData = <T extends P, P = T>(
  array: T[],
  getId: (param: T) => number,
  modify: (data: T) => P = (d) => d
) => {
  const ids = new Set<number>([]);
  const data: { [key: number]: P } = {};

  array.forEach((item) => {
    const id = getId(item);
    ids.add(id);
    data[id] = modify(item);
  });

  return {
    data,
    ids: Array.from(ids),
  };
};

export { normalizeData };
