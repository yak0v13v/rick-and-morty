import { Category } from "../constants";
import { fetchSuggestions } from "./suggestion";
import { createEvent, createStore, sample, split } from "effector";
import { debounce } from "patronum/debounce";

const DEBOUNCE_DELAY = 300;

const setSearchValue = createEvent<string>();
const setCategory = createEvent<string>();

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

export const $$search = {
  setCategory,
  setSearchValue,
  $category,
  $searchValue,
};
