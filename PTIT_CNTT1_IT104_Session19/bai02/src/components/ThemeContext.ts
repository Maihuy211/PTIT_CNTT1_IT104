import { createContext } from "react";

export interface Theme {
  theme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Theme | undefined>(undefined);
