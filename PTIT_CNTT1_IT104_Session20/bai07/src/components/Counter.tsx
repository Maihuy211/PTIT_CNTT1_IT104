import { useReducer } from "react";
import "./Counter.css";
type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h2>Bộ đếm: {state.count}</h2>
      <div className="button">
        <button onClick={handleIncrement}>Tăng</button>
        <button onClick={handleDecrement}>Giảm</button>
      </div>
    </div>
  );
}
