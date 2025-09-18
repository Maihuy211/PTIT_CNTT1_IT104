import { TOGGLE_THEME } from "../constants/type";
type ActionType = {
  type: string;
};
const themeReducer = (state = "light", action: ActionType) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default themeReducer;
