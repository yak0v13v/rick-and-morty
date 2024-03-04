import Image from "next/image";
import Link from "next/link";

import styles from "./suggestion-card.module.scss";

type Props = {
  category: string;
  id: number;
  img?: string;
  name?: string;
};

const SuggestionCard = ({ name, img, category, id }: Props) => {
  const url = `/${category}/${id}`;

  return (
    <Link className={styles.card} href={url}>
      {img && (
        <Image
          alt={"name"}
          className={styles.img}
          height={50}
          objectFit="cover"
          src={img}
          width={50}
        />
      )}
      <div className={styles.title}>{name}</div>
    </Link>
  );
};

export { SuggestionCard };
