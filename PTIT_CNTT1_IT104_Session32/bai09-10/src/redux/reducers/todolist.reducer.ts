import {
  ADD_TASK,
  COMPLETE_ALL,
  DELETE_ALL,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASK,
  TOGGLE_TASK,
} from "../constants/type";

export type Task = {
  id: number;
  name: string;
  level: "Khẩn cấp" | "Quan trọng" | "Bình thường" | "Không quan trọng";
  completed: boolean;
};

type State = {
  tasks: Task[];
  filterLevel: string;
};

type ActionTypes =
  | { type: typeof ADD_TASK; payload: Task }
  | { type: typeof EDIT_TASK; payload: Task }
  | { type: typeof DELETE_TASK; payload: number }
  | { type: typeof TOGGLE_TASK; payload: number }
  | { type: typeof COMPLETE_ALL }
  | { type: typeof DELETE_ALL }
  | { type: typeof FILTER_TASK; payload: string };

const initialState: State = {
  tasks: [
    {
      id: 1,
      name: "Xây dựng thành Header",
      level: "Khẩn cấp",
      completed: false,
    },
    {
      id: 2,
      name: "Xây dựng thành Menu",
      level: "Quan trọng",
      completed: false,
    },
    {
      id: 3,
      name: "Fix lỗi đăng nhập",
      level: "Bình thường",
      completed: false,
    },
    { id: 4, name: "Đi chơi", level: "Không quan trọng", completed: false },
  ],
  filterLevel: "Tất cả",
};

const listTaskReducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, ...action.payload } : t
        ),
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case COMPLETE_ALL:
      return {
        ...state,
        tasks: state.tasks.map((t) => ({ ...t, completed: true })),
      };

    case DELETE_ALL:
      return { ...state, tasks: [] };

    case FILTER_TASK:
      return { ...state, filterLevel: action.payload };

    default:
      return state;
  }
};

export default listTaskReducer;
