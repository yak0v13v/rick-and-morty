import type { ReactNode } from "react";

import { Footer } from "../footer";
import { Header } from "../header";
import { cn } from "@/shared/lib/cn";

import styles from "./page.module.scss";

type Props = {
  children?: ReactNode;
  className?: string;
  headerRightSlot?: ReactNode;
};

const Page = ({ children, className, headerRightSlot }: Props) => {
  const classes = cn(styles.container, className);

  return (
    <div className={classes}>
      <Header rightSlot={headerRightSlot} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export { Page };
