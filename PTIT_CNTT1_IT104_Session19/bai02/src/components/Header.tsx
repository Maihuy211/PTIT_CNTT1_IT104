import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { toggleTheme } = context;

  return (
    <div>
      <h1>My Themed App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
