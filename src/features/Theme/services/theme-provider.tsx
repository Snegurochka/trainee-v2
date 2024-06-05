import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./theme-hook";
import { LIGHT_THEME } from "./theme-constants";
import { darkTheme, lightTheme } from "./theme-scheme";
import { ThemeToggler } from "../components/ThemeToggler";

const getTheme = (theme: string) =>
  theme === LIGHT_THEME ? lightTheme : darkTheme;

export const ThemeAppProvider = ({ children }: { children: ReactNode }) => {
  const { theme: currentTheme, toggleTheme } = useTheme();
  const theme = getTheme(currentTheme);
  return (
    <ThemeProvider theme={theme}>
      <ThemeToggler theme={currentTheme} toggleTheme={toggleTheme} />
      {children}
    </ThemeProvider>
  );
};
