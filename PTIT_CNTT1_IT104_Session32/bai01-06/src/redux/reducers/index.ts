import { combineReducers } from "redux";
import profileReducer from "./profile.reducer";
import counterReducer from "./counter.reducer";
import listUserReducer from "./listUser.reducer";
import randomReducer from "./random.reducer";
import companyReducer from "./change.reducer";
import themeReducer from "./toggle.reducer";

// Gộp tất cả các reducer của toàn bộ dự án
const reducers = combineReducers({
  profile: profileReducer,
  listUser: listUserReducer,
  counter: counterReducer,
  random: randomReducer,
  change: companyReducer,
  toggle: themeReducer,
});
export default reducers;
