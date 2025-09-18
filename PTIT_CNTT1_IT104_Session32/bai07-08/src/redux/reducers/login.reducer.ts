import { LOGIN } from "../constants/type";
interface State {
  email: string;
  password: string;
}

interface Action {
  type: string;
  payload?: State;
}

const initialState: State = {
  email: "",
  password: "",
};

const loginForm = (state = initialState, action: Action): State => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload?.email || "",
        password: action.payload?.password || "",
      };
    default:
      return state;
  }
};

export default loginForm;
