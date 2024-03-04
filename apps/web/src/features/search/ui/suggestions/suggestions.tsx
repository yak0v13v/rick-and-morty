import { $$character } from "@/entities/character/model";
import { useUnit } from "effector-react";

import styles from "./suggestion.module.scss";

const Suggestions = () => {
  const data = useUnit($$character.allQuery.$data);

  return (
    <div className={styles.container}>
      {data?.ids.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export { Suggestions };
