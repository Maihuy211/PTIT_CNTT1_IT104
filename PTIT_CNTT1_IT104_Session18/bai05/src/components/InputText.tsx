import React, { useReducer } from "react";
import "./InputText.css";
type State = {
  text: string;
};

type Action = {
  type: "CHANGE_TEXT";
  payload: string;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHANGE_TEXT", payload: event.target.value });
  };

  return (
    <div>
      <h1>{state.text}</h1>
      <input type="text" value={state.text} onChange={handleChange} />
    </div>
  );
}
