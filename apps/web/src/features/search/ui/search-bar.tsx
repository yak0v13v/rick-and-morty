"use client";

import { CATEGORIES } from "../constants";
import { $$search } from "../model/model";
import SearchIcon from "./search.svg";
import { Suggestions } from "./suggestions/suggestions";
import { cn } from "@/shared/lib/cn";
import { useUnit } from "effector-react";
import { ChangeEventHandler, type FormEventHandler } from "react";

import styles from "./search-bar.module.scss";

type Props = {
  className?: string;
};

const SearchBar = ({ className }: Props) => {
  const [setCategory, setSearchValue] = useUnit([
    $$search.setCategory,
    $$search.setSearchValue,
  ]);

  const classes = cn(styles.container, className);

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const onCategoryChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategory(e.target.value);
  };

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes} onSubmit={formSubmitHandler}>
      <input
        autoComplete="off"
        className={styles.search}
        onChange={onSearchChange}
        placeholder="Rick"
        role="search"
        type="text"
      />

      <select className={styles.select} onChange={onCategoryChange}>
        {CATEGORIES.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button aria-label="search" className={styles.btn} type="submit">
        <SearchIcon />
      </button>

      <Suggestions />
    </form>
  );
};

export { SearchBar };
