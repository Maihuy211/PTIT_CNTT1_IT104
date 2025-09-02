import React, { useReducer } from "react";
import "./UserForm.css";

// Định nghĩa kiểu state
type State = {
  name: string;
  email: string;
};

// Định nghĩa kiểu action chung
type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string };

// Reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

// Component UserForm
export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  return (
    <div className="form-container">
      <h2>User Information Form</h2>
      <div className="form-group">
        <label>Tên:</label>
        <input type="text" value={state.name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" value={state.email} onChange={handleEmailChange} />
      </div>

      <div className="user-info">
        <h3>Thông tin người dùng:</h3>
        <p>
          <b>Tên:</b> {state.name || "(Chưa nhập)"}
        </p>
        <p>
          <b>Email:</b> {state.email || "(Chưa nhập)"}
        </p>
      </div>
    </div>
  );
}
