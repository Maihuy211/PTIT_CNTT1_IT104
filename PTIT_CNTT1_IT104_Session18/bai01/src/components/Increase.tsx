import { useReducer } from "react";
import "./Increase.css";
function reducer(state: number, action: string): number {
  switch (action) {
    case "INCREASE":
      return state + 1;
    default:
      return state;
  }
}

export default function Increase() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("INCREASE")}>Increase</button>
    </div>
  );
}
