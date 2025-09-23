import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../stores";
import { random } from "../slices/randomSlices";
import { Button } from "antd";

export default function RandomNumber() {
  const result = useSelector((state: RootState) => state.random);
  const dispatch = useDispatch();
  const handleRandom = () => {
    dispatch(random());
  };
  return (
    <div>
      Bai02:
      <h2>{JSON.stringify(result.value)}</h2>
      <Button onClick={handleRandom}>Random Number</Button>
    </div>
  );
}
