import type { ReactNode } from "react";

import { cn } from "@/shared/lib/hooks/cn";
import Image from "next/image";
import Link from "next/link";

import styles from "./header.module.scss";

type Props = {
  className?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
};

const Header = ({ className, leftSlot = "  ", rightSlot }: Props) => {
  const classes = cn(styles.header, className);

  return (
    <header className={classes}>
      <div className={styles.leftSlot}>{leftSlot}</div>
      <Link aria-label="Home" className={styles.link} href={"/"}>
        <Image
          alt="Rick And Morty Logo"
          height={40}
          src="/logo.svg"
          width={140}
        ></Image>
      </Link>
      <div className={styles.rightSlot}>{rightSlot}</div>
    </header>
  );
};

export { Header };
