import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: boolean } = {
  value: true,
};

const toggleSlices = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});
export default toggleSlices.reducer;
export const { toggle } = toggleSlices.actions;
