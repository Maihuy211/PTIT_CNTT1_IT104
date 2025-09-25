import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "../interface/student.interface";

export const getAllStudent = createAsyncThunk("s/getAllStudent", async () => {
  const response = axios.get("http://localhost:8080/students");

  return (await response).data;
});

export const createStudent = createAsyncThunk(
  "s/createStudent",
  async (s: Student) => {
    const response = await axios.post("http://localhost:8080/students", s);
    return response.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "s/deleteStudent",
  async (id: number) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    return id;
  }
);

export const updateStudent = createAsyncThunk(
  "s/updateStudent",
  async (s: Student) => {
    const response = await axios.put(
      `http://localhost:8080/students/${s.id}`,
      s
    );
    return response.data;
  }
);

// export const deleteAllStudents = createAsyncThunk(
//   "s/deleteAllStudents",
//   async () => {
//     await axios.delete("http://localhost:8080/students");
//     return [];
//   }
// );
