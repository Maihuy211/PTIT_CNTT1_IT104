import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../slices/task.slices";
const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export default store;

// Định nghĩa type cho dispatch và selector
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
