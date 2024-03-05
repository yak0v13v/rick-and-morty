import { cn } from "@repa/utils";
import { type ReactNode } from "react";

import styles from "./container.module.scss";

type Props = {
  children?: ReactNode;
  className?: string;
  marginTop?: boolean;
};

const Container = ({ children, className, marginTop }: Props) => {
  const classes = cn(
    styles.container,
    marginTop && styles.marginTop,
    className
  );

  return <div className={classes}>{children}</div>;
};

export { Container };
