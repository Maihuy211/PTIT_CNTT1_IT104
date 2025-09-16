import { useState } from "react";
import { Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

interface TaskActionsProps {
  deleteCompletedTasks: () => void;
  deleteAllTasks: () => void;
}

export default function TaskActions({
  deleteCompletedTasks,
  deleteAllTasks,
}: TaskActionsProps) {
  const [isDeleteCompletedOpen, setIsDeleteCompletedOpen] = useState(false);
  const [isDeleteAllOpen, setIsDeleteAllOpen] = useState(false);

  // mở modal xóa công việc hoàn thành
  function openDeleteCompletedModal() {
    setIsDeleteCompletedOpen(true);
  }

  // đóng modal xóa công việc hoàn thành
  function closeDeleteCompletedModal() {
    setIsDeleteCompletedOpen(false);
  }

  // xác nhận xóa công việc hoàn thành
  function handleDeleteCompleted() {
    deleteCompletedTasks();
    setIsDeleteCompletedOpen(false);
  }

  // mở modal xóa tất cả
  function openDeleteAllModal() {
    setIsDeleteAllOpen(true);
  }

  // đóng modal xóa tất cả
  function closeDeleteAllModal() {
    setIsDeleteAllOpen(false);
  }

  // xác nhận xóa tất cả
  function handleDeleteAll() {
    deleteAllTasks();
    setIsDeleteAllOpen(false);
  }

  return (
    <div>
      <div className="flex justify-between gap-2 ">
        <Button
          className="!h-[40px] !bg-red-500 !text-white"
          onClick={openDeleteCompletedModal}
        >
          Xoá công việc hoàn thành
        </Button>
        <Button
          className="!h-[40px] !bg-red-500 !text-white"
          onClick={openDeleteAllModal}
        >
          Xoá tất cả công việc
        </Button>
      </div>

      {/* Modal xoá công việc hoàn thành */}
      <Modal
        className="!w-[400px]"
        title="Xác nhận"
        open={isDeleteCompletedOpen}
        onOk={handleDeleteCompleted}
        onCancel={closeDeleteCompletedModal}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <div className="flex items-center gap-3">
          <ExclamationCircleOutlined className="!text-red-500 text-2xl" />
          <p>
            Bạn có chắc chắn muốn xoá <b>Các công việc hoàn thành</b> không?
          </p>
        </div>
      </Modal>

      {/* Modal xoá tất cả công việc */}
      <Modal
        className="!w-[400px]"
        title="Xác nhận"
        open={isDeleteAllOpen}
        onOk={handleDeleteAll}
        onCancel={closeDeleteAllModal}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <div className="flex items-center gap-3">
          <ExclamationCircleOutlined className="!text-red-500 text-2xl" />
          <p>
            Bạn có chắc chắn muốn xoá <b>Tất cả công việc</b> không?
          </p>
        </div>
      </Modal>
    </div>
  );
}
