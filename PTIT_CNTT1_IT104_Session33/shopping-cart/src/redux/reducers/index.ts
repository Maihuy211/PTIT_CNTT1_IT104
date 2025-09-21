import { combineReducers } from "redux";
import listProductReducer from "./listproduct.reducers";
import listCartReducer from "./listcart.reducers";

const reducers = combineReducers({
  listProduct: listProductReducer,
  listCart: listCartReducer,
});
export type RootState = ReturnType<typeof reducers>;
export default reducers;
