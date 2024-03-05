import { $$search } from "../../model/search";
import { $suggestions } from "../../model/suggestion";
import { SuggestionCard } from "./suggestion-card/suggestion-card";
import { ErrorIcon } from "@/shared/ui/error-icon";
import { Spinner } from "@/shared/ui/spinner";
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

  if (payload?.result) {
    return (
      <div className={styles.container}>
        {payload.result.ids.map((id) => {
          if (payload.result) {
            const key = category + id;
            const suggestion = payload.result.data[id];
            const name = "name" in suggestion ? suggestion.name : null;
            const image = "image" in suggestion ? suggestion.image : null;

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
    );
  }

  if (payload?.pending) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  if (payload?.error && typeof payload.error === "object") {
    const error = payload.error;
    return (
      <div className={styles.container}>
        <ErrorIcon
          text={
            "status" in error && error.status === 404 ? "Not Found" : "Error"
          }
        />
      </div>
    );
  }

  return null;
};

export { Suggestions };
