import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  favorite: boolean;
}

const initialState: { value: User[] } = {
  value: [
    { id: 1, name: "Nguyễn Văn A", favorite: false },
    { id: 2, name: "Nguyễn Văn B", favorite: true },
    { id: 3, name: "Nguyễn Văn C", favorite: false },
    { id: 4, name: "Nguyễn Văn D", favorite: false },
  ],
};

const userSlices = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlices.reducer;
