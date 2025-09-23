import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../stores";
import { toggle } from "../slices/themetoggleSilces";
import { Button } from "antd";

export default function ThemeToggle() {
  const result = useSelector((state: RootState) => state.toggle.value);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div>
      Bài 03:
      <div
        className={`w-[100px] h-[100px] flex justify-center items-center border-gray-300 border-1 ${result ? "!bg-black !border-white !text-white" : "!bg-white"}`}
      >
        <Button
          onClick={handleToggle}
          className={`${result ? "!bg-black !border-white !text-white" : "!bg-white !border-black !text-black"}`}
        >
          {result ? "dark" : "light"}
        </Button>
      </div>
    </div>
  );
}
