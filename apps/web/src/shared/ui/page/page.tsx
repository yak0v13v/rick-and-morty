import type { ReactNode } from "react";

import { Header } from "../header";
import { cn } from "@/shared/lib/hooks/cn";

import styles from "./page.module.scss";

type Props = {
  children?: ReactNode;
  className?: string;
};

const Page = ({ children, className }: Props) => {
  const classes = cn(styles.container, className);

  return (
    <div className={classes}>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export { Page };
