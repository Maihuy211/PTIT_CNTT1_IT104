import { useEffect, useState } from "react";
import { Button, Input, Select, Space } from "antd";
import { useAppDispatch, useAppSelector } from "../hook/useReducer";
import type { Task } from "../interface/task.interface";
import { createTask, updateTask } from "../apis/taskApi";

const { Option } = Select;

export default function FromTask() {
  const dispatch = useAppDispatch();
  const { task, data } = useAppSelector((store) => store.task);

  const [taskName, setTaskName] = useState<string>("");
  const [priority, setPriority] = useState<string>("Cao");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setTaskName(task?.taskName || "");
    setPriority(task?.priority || "Cao");
    setError("");
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validate rỗng
    if (!taskName.trim()) {
      setError("Tên công việc không được để trống!");
      return;
    }

    // validate trùng (không so chính task đang sửa)
    const isDuplicate = data.some(
      (t) =>
        t.taskName?.toLowerCase() === taskName.trim().toLowerCase() &&
        t.id !== task?.id
    );
    if (isDuplicate) {
      setError("Tên công việc đã tồn tại!");
      return;
    }

    setError(""); // clear lỗi nếu hợp lệ

    const newTask: Task = {
      taskName: taskName.trim(),
      completed: false,
      priority,
    };

    if (task) {
      dispatch(
        updateTask({
          id: task.id || 0,
          taskName: taskName.trim(),
          priority,
          completed: false,
        })
      );
    } else {
      dispatch(createTask(newTask));
    }

    // reset lại input
    setTaskName("");
    setPriority("Cao");
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <form onSubmit={handleSubmit}>
        <Space className="flex justify-between w-full" size="middle">
          <div className="flex flex-col">
            <Input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Công việc mới"
              className="!w-[290px]"
            />
          </div>

          <Select
            value={priority}
            onChange={(value) => setPriority(value)}
            className="w-[120px]"
          >
            <Option value="Cao">Cao</Option>
            <Option value="Trung bình">Trung bình</Option>
            <Option value="Thấp">Thấp</Option>
          </Select>

          <Button htmlType="submit" type="primary">
            {task ? "LƯU" : "THÊM"}
          </Button>
        </Space>
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
      </form>
    </div>
  );
}
