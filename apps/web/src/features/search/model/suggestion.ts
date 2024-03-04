import { searchApi } from "../api/searchApi";
import { suggestionsReducer } from "../lib/suggestionsReducer";
import { GetSuggestionsParams, Suggestions } from "../types";
import { createQuery } from "@farfetched/core";
import { createEvent, createStore, sample } from "effector";

export const fetchSuggestions = createEvent<GetSuggestionsParams>();

const suggetstionQuery = createQuery({ handler: searchApi.getSuggestions });

export const $suggestions = createStore<Suggestions>({});

$suggestions.on(
  suggetstionQuery.started,
  (state, { params: { category, search } }) =>
    suggestionsReducer(state, {
      category,
      search,
      result: null,
      pending: true,
      error: null,
    })
);

$suggestions.on(
  suggetstionQuery.finished.success,
  (state, { params: { category, search }, result }) =>
    suggestionsReducer(state, {
      category,
      search,
      result,
      pending: false,
      error: null,
    })
);

$suggestions.on(
  suggetstionQuery.finished.failure,
  (state, { params: { category, search }, error }) =>
    suggestionsReducer(state, {
      category,
      search,
      error,
      result: null,
      pending: false,
    })
);

sample({
  clock: fetchSuggestions,
  source: $suggestions,
  filter: (suggestions, { category, search }) =>
    !suggestions?.[category]?.[search],
  fn: (_, params) => params,
  target: suggetstionQuery.start,
});
