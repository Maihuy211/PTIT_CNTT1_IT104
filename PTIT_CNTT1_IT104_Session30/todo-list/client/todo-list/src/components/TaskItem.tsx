import { Checkbox, List, Modal, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";

interface Task {
  id: number;
  task: string;
  status: boolean;
}

interface TaskItemProps {
  tasks: Task[];
  delTask: (id: number) => void;
  toggleTask: (id: number, status: boolean) => void;
  editTask: (id: number, newName: string) => void;
}

export default function TaskItem({
  tasks,
  delTask,
  toggleTask,
  editTask,
}: TaskItemProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // text task
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [editValue, setEditValue] = useState("");

  // mở modal xoá
  const handleOpenDelete = (task: Task) => {
    setSelectedTask(task);
    setIsDeleteOpen(true);
  };

  // xoá task
  const handleConfirmDelete = () => {
    if (selectedTask) {
      delTask(selectedTask.id);
    }
    setIsDeleteOpen(false);
    setSelectedTask(null);
  };

  // huỷ xoá
  const handleCancelDelete = () => {
    setIsDeleteOpen(false);
    setSelectedTask(null);
  };

  // mở modal sửa
  const handleOpenEdit = (task: Task) => {
    setSelectedTask(task);
    setEditValue(task.task);
    setIsEditOpen(true);
  };

  const handleConfirmEdit = () => {
    if (selectedTask) {
      editTask(selectedTask.id, editValue);
    }
    setIsEditOpen(false);
    setSelectedTask(null);
  };

  // huỷ sửa
  const handleCancelEdit = () => {
    setIsEditOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="max-w-[500px] mx-auto mt-10 overflow-y-auto max-h-[350px]">
      <List
        dataSource={tasks}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            className="bg-white shadow !p-3 rounded flex mb-[15px] border-gray-100 border-2"
            actions={[
              <div className="flex gap-3 text-[20px]" key="actions">
                <EditOutlined
                  className="!text-yellow-300 cursor-pointer"
                  onClick={() => handleOpenEdit(item)}
                />
                <DeleteOutlined
                  className="!text-red-400 cursor-pointer"
                  onClick={() => handleOpenDelete(item)}
                />
              </div>,
            ]}
          >
            <Checkbox
              checked={item.status}
              onChange={() => toggleTask(item.id, item.status)}
            >
              <span className={item.status ? "line-through" : ""}>
                {item.task}
              </span>
            </Checkbox>
          </List.Item>
        )}
      />

      {/* Modal Delete */}
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
            <b>&lt;{selectedTask?.task}&gt;</b> không?
          </p>
        </div>
      </Modal>

      {/* Modal Edit */}
      <Modal
        className="!w-[400px]"
        title="Sửa công việc"
        open={isEditOpen}
        onOk={handleConfirmEdit}
        onCancel={handleCancelEdit}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      </Modal>
    </div>
  );
}
