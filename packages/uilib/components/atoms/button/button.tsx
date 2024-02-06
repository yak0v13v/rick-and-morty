import type { ButtonProps } from "./types";

import { cn } from "@repa/utils";

import styles from "./button.module.scss";

const Button = ({
  className,
  size = "m",
  view = "primary",
  width = "auto",
  ...props
}: ButtonProps) => {
  const classes = cn(
    styles.button,
    styles[view],
    styles[size],
    styles[width],
    className
  );

  if (props.as === "link") {
    const {
      href,
      rel = "noopener noreferrer",
      target = "_blank",
      ...linkProps
    } = props;

    return (
      <a
        className={classes}
        href={href}
        rel={rel}
        target={target}
        {...linkProps}
      />
    );
  }

  return <button className={classes} {...props} />;
};

export { Button };
