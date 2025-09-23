import { configureStore } from "@reduxjs/toolkit";
import countSlices from "../slices/counterSlices";
import randomSlices from "../slices/randomSlices";
import toggleSlices from "../slices/themetoggleSilces";
import modeSlices from "../slices/modeSlices";
import languageSlice from "../slices/languageSlices";
import userSlices from "../slices/listuserSlices";
import widthslices from "../slices/sidebarSices";
import loginSlices from "../slices/loginSlices";
// nơi lưu trữ dữ liệu tập chung cho toàn bộ dữ án
export const store = configureStore({
  reducer: {
    counter: countSlices,
    random: randomSlices,
    toggle: toggleSlices,
    mode: modeSlices,
    with: widthslices,
    language: languageSlice,
    users: userSlices,
    login: loginSlices,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
