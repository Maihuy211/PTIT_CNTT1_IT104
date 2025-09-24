import { Checkbox, Modal, Spin, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../hook/useReducer";
import { useEffect, useState } from "react";
import { deleteTask, getAllTask } from "../apis/taskApi";
import type { Task } from "../interface/task.interface";
import { getTaskDetail } from "../redux/slices/task.slices";

export default function ListTask() {
  const { data: tasks, error, status } = useAppSelector((store) => store.task);
  const dispatch = useAppDispatch();

  // State cho modal xoá
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task>();

  useEffect(() => {
    dispatch(getAllTask(""));
  }, [dispatch]);

  const getPriorityColor = (priority: string) => {
    if (priority === "High") {
      return "red";
    } else if (priority === "Medium") {
      return "orange";
    } else {
      return "green";
    }
  };

  // Mở modal xoá
  const handleDeleteClick = (task: Task) => {
    setTaskToDelete(task);
    setIsDeleteOpen(true);
  };

  // Xác nhận xoá
  const handleConfirmDelete = () => {
    if (taskToDelete?.id) {
      dispatch(deleteTask(taskToDelete.id));
    }
    setIsDeleteOpen(false);
  };

  // Huỷ xoá
  const handleCancelDelete = () => {
    setIsDeleteOpen(false);
  };

  if (error) {
    return <h1>Đã có lỗi xảy ra. Vui lòng kiểm tra lại</h1>;
  }

  return (
    <div>
      {status === "pending" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 65, color: "#5d9fdf" }}
                spin
              />
            }
          />
        </div>
      )}

      <div className="space-y-3">
        {status === "success" && tasks.length === 0 ? (
          <div className="text-center text-gray-500 py-6 bg-white shadow rounded-lg">
            Không có dữ liệu
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white shadow rounded-lg px-4 py-2"
            >
              <div className="flex items-center gap-2">
                <Checkbox checked={task.completed} />
                <span
                  className={task.completed ? "line-through text-gray-500" : ""}
                >
                  {task.taskName}
                </span>
                <Tag color={getPriorityColor(task.priority || "")}>
                  {task.priority}
                </Tag>
              </div>
              <div className="flex gap-2">
                <DeleteOutlined
                  className="!text-red-500 cursor-pointer"
                  onClick={() => handleDeleteClick(task)}
                />
                <EditOutlined
                  className="!text-blue-500 cursor-pointer"
                  onClick={() => dispatch(getTaskDetail(task))}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal xoá */}
      <Modal
        className="!w-[400px]"
        title="Xác nhận"
        open={isDeleteOpen}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <div className="flex items-center gap-3">
          <ExclamationCircleOutlined className="!text-red-500 text-2xl" />
          <p>
            Bạn có chắc chắn muốn xoá công việc{" "}
            <b>&lt;{taskToDelete?.taskName}&gt;</b> không?
          </p>
        </div>
      </Modal>
    </div>
  );
}
