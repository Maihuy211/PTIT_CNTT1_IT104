import React, { useReducer } from "react";
import "./InputRadio.css";
type State = {
  gender: string;
};

type Action = {
  type: "CHANGE_GENDER";
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_GENDER":
      return { ...state, gender: action.payload };
    default:
      return state;
  }
};

export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_GENDER", payload: event.target.value });
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Nam"
            checked={state.gender === "Nam"}
            onChange={handleChange}
          />
          Nam
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Nữ"
            checked={state.gender === "Nữ"}
            onChange={handleChange}
          />
          Nữ
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Khác"
            checked={state.gender === "Khác"}
            onChange={handleChange}
          />
          Khác
        </label>
      </div>
      <h3>Selected gender: {state.gender}</h3>
    </div>
  );
}
