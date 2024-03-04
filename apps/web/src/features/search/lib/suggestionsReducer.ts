import { Suggestions, SuggestionsPayload } from "../types";

type Parameters = SuggestionsPayload & { category: string; search: string };

const suggestionsReducer = (
  state: Suggestions,
  { category, search, error, pending, result }: Parameters
): Suggestions => ({
  ...state,
  [category]: {
    ...(state[category] ?? {}),
    [search]: {
      result: result,
      error: error,
      pending: pending,
    },
  },
});

export { suggestionsReducer };
