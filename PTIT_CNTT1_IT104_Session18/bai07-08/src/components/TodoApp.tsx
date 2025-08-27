import { useReducer, useEffect, useState } from "react";
import "./TodoApp.css";

type Task = {
  id: number;
  name: string;
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: number }
  | { type: "SET"; payload: Task[] };

function reducer(state: Task[], action: Action): Task[] {
  switch (action.type) {
    case "ADD": {
      if (!action.payload.trim()) return state;
      const newTask: Task = { id: Date.now(), name: action.payload };
      const updatedAdd = [...state, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedAdd));
      return updatedAdd;
    }

    case "REMOVE": {
      const updatedRemove = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedRemove));
      return updatedRemove;
    }

    case "SET":
      return action.payload;

    default:
      return state;
  }
}

// ====== Component chính ======
export default function TodoApp() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  // Lấy dữ liệu từ localStorage khi load trang
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      dispatch({ type: "SET", payload: JSON.parse(stored) });
    }
  }, []);

  // Thêm công việc
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  // Xóa công việc (có confirm)
  const handleDelete = (id: number, name: string) => {
    const confirmDelete = window.confirm(
      `Bạn có chắc chắn muốn xóa công việc "${name}" không?`
    );
    if (confirmDelete) {
      dispatch({ type: "REMOVE", payload: id });
    }
  };
  return (
    <div className="todo-container">
      <div className="container">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleAdd} className="add-btn">
          Thêm công việc
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <span>{task.name}</span>
            <button
              onClick={() => handleDelete(task.id, task.name)}
              className="delete-btn"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
