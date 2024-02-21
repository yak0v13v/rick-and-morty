import { SearchBar } from "@/features/search";
import { Container } from "@repa/uilib/components";

import styles from "./search.module.scss";

const title = "Rick & Morty\u00A0API";
const description = "Find your favorite rick and morty characters";

const Search = () => {
  return (
    <Container className={styles.container} marginTop>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <SearchBar className={styles.searchBar} />
    </Container>
  );
};

export { Search };
