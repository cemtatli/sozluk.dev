"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import styles from "./styles.module.css";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  return (
    <input
      aria-label="Theme Switcher"
      checked={theme === "light"}
      type="checkbox"
      className={styles.label}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    />
  );
}
