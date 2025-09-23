import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
}

interface AuthState {
  isLogin: boolean;
  users: User[];
  currentUser: User | null;
}

const initialState: AuthState = {
  isLogin: false,
  users: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      email: "nva@gmail.com",
      password: "123456",
    },
  ],
  currentUser: null,
};

const loginSlices = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        state.isLogin = true;
        state.currentUser = user;
      }
    },
    logout: (state) => {
      state.isLogin = false;
      state.currentUser = null;
    },
  },
});

export const { login, logout } = loginSlices.actions;
export default loginSlices.reducer;
