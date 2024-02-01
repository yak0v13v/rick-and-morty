"use client";

import Link from "next/link";

import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 180 75.7599" xmlns="http://www.w3.org/2000/svg">
        <use className={styles.spin} href="/404.svg#portal" />
        <use href="/404.svg#text" />
      </svg>
      <Link className={styles.link} href={"/"}>
        Home Page
      </Link>
    </div>
  );
};

export { Banner };
