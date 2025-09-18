import { useDispatch, useSelector } from "react-redux";

export default function ThemeToggle() {
  // Lấy dữ liệu từ store
  const result = useSelector((state) => state.toggle);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  const isDark = result === "dark";

  return (
    <div>
      Bài 06:
      <div className={`container-theme ${isDark ? "dark" : "light"}`}>
        <input type="checkbox" checked={isDark} onChange={handleChange} />
      </div>
    </div>
  );
}
