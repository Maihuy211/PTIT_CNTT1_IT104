import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: boolean } = {
  value: true,
};

const widthslices = createSlice({
  name: "width",
  initialState,
  reducers: {
    togglewidth: (state) => {
      state.value = !state.value;
    },
  },
});
export default widthslices.reducer;
export const { togglewidth } = widthslices.actions;
