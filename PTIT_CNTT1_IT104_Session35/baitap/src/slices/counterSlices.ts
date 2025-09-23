import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: number } = {
  value: 0,
};

const countSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increase } = countSlices.actions;
export const { decrease } = countSlices.actions;
export const { reset } = countSlices.actions;
export default countSlices.reducer;
