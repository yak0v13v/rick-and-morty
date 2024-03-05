import { useEffect, useRef, useState } from "react";

export function useSuggestions<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  const onFocus: EventListener = (e) => {
    if (ref.current?.contains(e.target as Node)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const onClick: EventListener = (e) => {
    if (!ref.current?.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClick);
    document.addEventListener("focus", onFocus, { capture: true });

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("focus", onFocus, { capture: true });
    };
  }, []);

  return [ref, isVisible] as const;
}
