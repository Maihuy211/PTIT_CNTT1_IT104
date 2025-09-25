import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../slices/studnet.slices";
const store = configureStore({
  reducer: {
    student: studentSlice,
  },
});

export default store;

// Định nghĩa type cho dispatch và selector
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
