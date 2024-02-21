"use client";

import SearchIcon from "./search.svg";
import { cn } from "@/shared/lib/cn";
import { type FormEventHandler } from "react";

import styles from "./search-bar.module.scss";

type Props = {
  className?: string;
};

const SearchBar = ({ className }: Props) => {
  const classes = cn(styles.container, className);

  const formSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes} onSubmit={formSubmitHandler}>
      <input
        autoComplete="off"
        className={styles.search}
        placeholder="Rick"
        role="search"
        type="text"
      />

      <select className={styles.select}>
        <option value="character">Characters</option>
        <option value="location">Locations</option>
        <option value="episode">Episodes</option>
      </select>

      <button aria-label="search" className={styles.btn} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export { SearchBar };
