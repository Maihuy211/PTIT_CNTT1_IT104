import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Content() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme } = context;

  return (
    <div>
      <p>Theme hiện tại: {theme ? "Dark" : "Light"}</p>
    </div>
  );
}
