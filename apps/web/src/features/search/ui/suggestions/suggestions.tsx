import { $$search } from "../../model/model";
import { $suggestions } from "../../model/suggestion";
import { SuggestionCard } from "./suggestion-card/suggestion-card";
import { useStoreMap, useUnit } from "effector-react";
import { Fragment } from "react";

import styles from "./suggestion.module.scss";

const Suggestions = () => {
  const [category, search] = useUnit([
    $$search.$category,
    $$search.$searchValue,
  ]);
  const payload = useStoreMap({
    store: $suggestions,
    keys: [category, search],
    fn: (state, [category, search]) => state?.[category]?.[search],
  });

  if (payload && payload?.result) {
    return (
      <div className={styles.container}>
        <div>
          {payload.result.ids.map((id) => {
            if (payload.result) {
              const key = category + id;
              const suggestion = payload.result.data[id];
              const name = "name" in suggestion ? suggestion.name : "";
              const image = "image" in suggestion ? suggestion.image : "";

              return (
                <Fragment key={key}>
                  <SuggestionCard
                    category={category}
                    id={id}
                    img={image}
                    name={name}
                  />
                  <div className={styles.divider} />
                </Fragment>
              );
            }

            return null;
          })}
        </div>
      </div>
    );
  }

  return <div className={styles.container}></div>;
};

export { Suggestions };
