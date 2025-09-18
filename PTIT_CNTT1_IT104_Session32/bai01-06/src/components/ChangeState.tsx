import { useDispatch, useSelector } from "react-redux";

export default function ChangeState() {
  // Lấy dữ liệu từ store
  const result = useSelector((state) => state.change);

  // Hàm truyền action từ UI lên reducer
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({ type: "CHANGE_COMPANY" });
  };

  return (
    <div>
      Bài 05:
      <h4>Company: {result}</h4>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}
