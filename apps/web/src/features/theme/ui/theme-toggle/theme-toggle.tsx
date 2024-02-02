"use client";

import DarkIcon from "./icons/dark.svg";
import LightIcon from "./icons/light.svg";
import SystemIcon from "./icons/system.svg";
import { useTheme } from "next-themes";

import styles from "./theme-toggle.module.scss";

const THEMES = ["light", "auto", "dark"] as const;

const ICONS = {
  [THEMES[0]]: LightIcon,
  [THEMES[1]]: SystemIcon,
  [THEMES[2]]: DarkIcon,
};

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <span className={styles.toggle}>
      {THEMES.map((item) => {
        const Icon = ICONS[item];

        return (
          <label
            aria-label={`Use ${item} theme`}
            className={styles.label}
            key={item}
            tabIndex={0}
            title={`Use ${item} theme`}
          >
            <input
              checked={theme === item}
              name="theme-toggle"
              onChange={() => setTheme(item)}
              type="radio"
              value={item}
            />
            <Icon className={styles.icon} />
          </label>
        );
      })}
    </span>
  );
};

export { ThemeToggle };
