import { Page } from "@/shared/ui/page";
import Link from "next/link";

import styles from "./not-created.module.scss";

const NotCreated = () => {
  return (
    <Page>
      <div className={styles.container}>
        <h1>This page hasn&apos;t yet been created</h1>
        <Link className={styles.link} href={"/"}>
          Home Page
        </Link>
      </div>
    </Page>
  );
};

export { NotCreated };
