import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  // Lấy dữ liệu từ store
  const result = useSelector((state) => state.counter);

  // Hàm truyền action từ UI lên reducer
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      Bai03:
      <h4>Counter: {result}</h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
