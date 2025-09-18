import { combineReducers } from "redux";
import listTaskReducer from "./todolist.reducer";

// Gộp tất cả các reducer của toàn bộ dự án
const reducers = combineReducers({
  listTask: listTaskReducer,
});
export default reducers;
