import TaskActions from "./TaskActions";
import TaskFilter from "./TaskFilter";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

interface Task {
  id: number;
  task: string;
  status: boolean;
}

export default function Task() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "doing">("all");

  // hàm lấy danh sách
  const getTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get<Task[]>("http://localhost:8080/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // hàm thêm
  const addTask = (nameTask: string) => {
    if (!nameTask || nameTask.trim() === "") {
      setError("Vui lòng nhập công việc!");
      return;
    }
    if (
      tasks
        .map((t) => t.task.toLowerCase().trim())
        .includes(nameTask.toLowerCase().trim())
    ) {
      setError("Tên công việc đã tồn tại!");
      return;
    }

    setLoading(true);
    axios
      .post("http://localhost:8080/tasks", { task: nameTask, status: false })
      .then(() => {
        getTasks();
        setError("");
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // hàm xoá
  const delTask = (id: number) => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/tasks/${id}`)
      .then(() => getTasks())
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // hàm cập nhật trạng thái
  const toggleTask = async (id: number, status: boolean) => {
    setLoading(true);
    try {
      await axios.patch(`http://localhost:8080/tasks/${id}`, {
        status: !status,
      });
      getTasks();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // hàm sửa
  const editTask = (id: number, newName: string) => {
    axios
      .patch(`http://localhost:8080/tasks/${id}`, { task: newName })
      .then(() => getTasks()) // reload lại danh sách
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // lọc danh sách task theo filter
  const filterTasks = tasks.filter((task) => {
    if (filter === "done") return task.status === true;
    if (filter === "doing") return task.status === false;
    return true; // all
  });

  // xoá theo yêu cầu
  // xoá tất cả công việc hoàn thành
  const deleteCompletedTasks = async () => {
    setLoading(true);
    try {
      const completed = tasks.filter((t) => t.status === true);
      for (const task of completed) {
        await axios.delete(`http://localhost:8080/tasks/${task.id}`);
      }
      getTasks();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // xoá tất cả công việc
  const deleteAllTasks = async () => {
    setLoading(true);
    try {
      for (const task of tasks) {
        await axios.delete(`http://localhost:8080/tasks/${task.id}`);
      }
      getTasks();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 65, color: "white" }} spin />
            }
          />
        </div>
      )}

      <div className="bg-white shadow-2xl p-5 rounded w-[500px] relative z-10">
        <div className="flex flex-col justify-center">
          <div>
            <h1 className="text-center text-xl font-bold">Quản lí công việc</h1>
          </div>
          <div className="p-3">
            <TaskInput addTask={addTask} error={error}></TaskInput>
          </div>
          <div className="p-3">
            <TaskFilter filter={filter} setFilter={setFilter}></TaskFilter>
          </div>
          <div className="p-3">
            <TaskItem
              delTask={delTask}
              toggleTask={toggleTask}
              editTask={editTask}
              tasks={filterTasks}
            ></TaskItem>
          </div>
        </div>
        <div className="p-3">
          <TaskActions
            deleteCompletedTasks={deleteCompletedTasks}
            deleteAllTasks={deleteAllTasks}
          ></TaskActions>
        </div>
      </div>
    </>
  );
}
