import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateType } from "../../interface/task.interface";
import {
  createTask,
  getAllTask,
  deleteTask,
  updateTask,
} from "../../apis/taskApi";

const initialState: InitialStateType = {
  status: "idle",
  data: [],
  error: null,
  task: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    getTaskDetail(state, action) {
      state.task = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllTask.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.data = state.data.filter((task) => task.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.data = state.data.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      });
  },
});

export default taskSlice.reducer;
export const { getTaskDetail } = taskSlice.actions;
