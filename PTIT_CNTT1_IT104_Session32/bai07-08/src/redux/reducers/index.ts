import { combineReducers } from "redux";
import registerForm from "./register.reducer";
import loginForm from "./login.reducer";

// Gộp tất cả các reducer của toàn bộ dự án
const reducers = combineReducers({
  register: registerForm,
  login: loginForm,
});
export default reducers;
