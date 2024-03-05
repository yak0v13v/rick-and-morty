import SpinnerSVG from "./spinner.svg";
import { cn } from "@/shared/lib/cn";

import styles from "./spinner.module.scss";

type Props = {
  className?: string;
};

const Spinner = ({ className }: Props) => {
  const classes = cn(styles.container, className);

  return (
    <div className={classes}>
      <SpinnerSVG className={styles.spinner} />
    </div>
  );
};

export { Spinner };
