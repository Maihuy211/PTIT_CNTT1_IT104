import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Task } from "../interface/task.interface";

// Lấy tất cả task (tìm kiếm + lọc theo trạng thái + độ ưu tiên)
export const getAllTask = createAsyncThunk(
  "todo/getAllTask",
  async (input: string) => {
    const [byName, byCompleted, byPriority] = await Promise.all([
      axios.get<Task[]>(`http://localhost:8080/Tasks?taskName_like=${input}`),
      axios.get<Task[]>(`http://localhost:8080/Tasks?completed=${input}`),
      axios.get<Task[]>(`http://localhost:8080/Tasks?priority=${input}`),
    ]);

    // Gộp dữ liệu lại
    const merged = [...byName.data, ...byCompleted.data, ...byPriority.data];

    return merged;
  }
);

// export const getAllTask = createAsyncThunk("task/getAllTask", async () => {
//   const response = axios.get("http://localhost:8080/Tasks");

//   return (await response).data;
// });

// Thêm task
export const createTask = createAsyncThunk(
  "task/createTask",
  async (task: Task) => {
    const response = await axios.post("http://localhost:8080/Tasks", task);
    return response.data;
  }
);

// Xóa task
export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: number) => {
    await axios.delete(`http://localhost:8080/Tasks/${id}`);
    return id;
  }
);

// Cập nhật task
export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (task: Task) => {
    const response = await axios.put(
      `http://localhost:8080/Tasks/${task.id}`,
      task
    );
    return response.data;
  }
);
