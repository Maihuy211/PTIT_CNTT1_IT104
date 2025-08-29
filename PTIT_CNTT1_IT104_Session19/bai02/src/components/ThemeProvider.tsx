import { useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <body className={theme ? "dark" : "light"}>{children}</body>
    </ThemeContext.Provider>
  );
}
