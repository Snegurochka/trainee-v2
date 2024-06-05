import { useCallback, useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "./theme-constants";

const getInitialState = () => {
  return localStorage.getItem("theme") || LIGHT_THEME;
}

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialState);

  const toggleTheme = useCallback(() => {
    const toggledTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(toggledTheme);
    localStorage.setItem("theme", toggledTheme);
  }, [theme]);

  return { theme, toggleTheme };
};
