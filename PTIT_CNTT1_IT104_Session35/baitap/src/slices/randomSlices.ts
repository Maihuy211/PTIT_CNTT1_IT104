import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: number[] } = {
  value: [],
};

const randomSlices = createSlice({
  name: "random",
  initialState,
  reducers: {
    random: (state) => {
      const randomNumber = Math.floor(Math.random() * 100);
      state.value.push(randomNumber);
    },
  },
});
export default randomSlices.reducer;
export const { random } = randomSlices.actions;
