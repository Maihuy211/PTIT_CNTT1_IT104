import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateType } from "../../interface/student.interface";
import {
  createStudent,
  //   deleteAllStudents,
  deleteStudent,
  getAllStudent,
  updateStudent,
} from "../../apis/student.apis";

const initialState: InitialStateType = {
  status: "idle",
  data: [],
  error: null,
  student: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getStudentDetail(state, action) {
      state.student = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllStudent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllStudent.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getAllStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (student) => student.id !== action.payload
        );
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.data = state.data.map((student) =>
          student.id === action.payload.id ? action.payload : student
        );
      });
    //   .addCase(deleteAllStudents.fulfilled, (state) => {
    //     state.data = [];
    //   });
  },
});

export default studentSlice.reducer;
export const { getStudentDetail } = studentSlice.actions;
