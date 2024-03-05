import { Category } from "../constants";
import { fetchSuggestions } from "./suggestion";
import { routerPushFx } from "@/shared/router";
import { createEvent, createStore, sample } from "effector";
import { debounce } from "patronum/debounce";

const DEBOUNCE_DELAY = 300;

const setSearchValue = createEvent<string>();
const setCategory = createEvent<string>();
const submitSearch = createEvent();

const $searchValue = createStore("");
const $category = createStore<string>(Category.character);

$searchValue.on(setSearchValue, (_, val) => val);
$category.on(setCategory, (_, category) => category);

sample({
  clock: [
    debounce(setCategory, DEBOUNCE_DELAY),
    debounce(setSearchValue, DEBOUNCE_DELAY),
  ],
  source: [$category, $searchValue],
  fn: ([category, search]) => ({
    category,
    search,
  }),
  target: fetchSuggestions,
});

sample({
  clock: submitSearch,
  source: $category,
  fn: (category) => category,
  target: routerPushFx,
});

export const $$search = {
  setCategory,
  setSearchValue,
  $category,
  $searchValue,
  submitSearch,
};
