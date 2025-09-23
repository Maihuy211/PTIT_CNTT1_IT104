import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../stores";
import { increase, decrease, reset } from "../slices/counterSlices";
import { Button } from "antd";
export default function Counter() {
  const result = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const handleIncerease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      Bai01:
      <h2>Counter : {result.value}</h2>
      <Button onClick={handleIncerease}>increase</Button>
      <Button onClick={handleDecrease}>decrease</Button>
      <Button onClick={handleReset}>reset</Button>
    </div>
  );
}
