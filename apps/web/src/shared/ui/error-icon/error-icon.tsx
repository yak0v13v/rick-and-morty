import RickIcon from "./rick.svg";
import { cn } from "@/shared/lib/cn";

import styles from "./error-icon.module.scss";

type Props = {
  className?: string;
  text?: string;
};

const ErrorIcon = ({ className, text }: Props) => {
  const classes = cn(styles.container, className);

  return (
    <div className={classes}>
      <RickIcon className={styles.icon} />
      {text && <div className={styles.text}>{text}</div>}
    </div>
  );
};

export { ErrorIcon };
