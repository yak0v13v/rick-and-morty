export type ResponseWithInfo<T> = {
  info: unknown;
  results: T[];
};
