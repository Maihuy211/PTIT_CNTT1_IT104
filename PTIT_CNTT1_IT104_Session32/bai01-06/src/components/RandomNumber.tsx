import { useDispatch, useSelector } from "react-redux";

export default function RandomNumber() {
  // Lấy dữ liệu từ store
  const result = useSelector((state) => state.random);

  const dispatch = useDispatch();

  const handleRandom = () => {
    dispatch({ type: "RANDOM", payload: Math.ceil(Math.random() * 10) });
  };
  return (
    <div>
      Bài 04:
      <h2>{JSON.stringify(result)}</h2>
      <button onClick={handleRandom}>Generate Random Number</button>
    </div>
  );
}
