import { useState } from "react";
import {
  Button,
  Select,
  Tag,
  Checkbox,
  Card,
  Space,
  Modal,
  Form,
  Input,
  Radio,
  List,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircleTwoTone } from "@ant-design/icons";

import type { Task } from "../redux/reducers/todolist.reducer";

const { Option } = Select;

const levelColor: Record<Task["level"], string> = {
  "Khẩn cấp": "red",
  "Quan trọng": "orange",
  "Bình thường": "blue",
  "Không quan trọng": "default",
};

export default function TodoList() {
  const { tasks, filterLevel } = useSelector(
    (state: { listTask: { tasks: Task[]; filterLevel: string } }) =>
      state.listTask
  );
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingTask, setDeletingTask] = useState<Task | null>(null);

  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);

  const completedCount = tasks.filter((t) => t.completed).length;
  const allCompleted = tasks.length > 0 && completedCount === tasks.length;

  // mở modal thêm
  const openAddModal = () => {
    setEditingTask(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  // mở modal sửa
  const openEditModal = (task: Task) => {
    setEditingTask(task);
    form.setFieldsValue(task);
    setIsModalOpen(true);
  };

  // mở modal xoá 1 task
  const openDeleteModal = (task: Task) => {
    setDeletingTask(task);
    setIsDeleteModalOpen(true);
  };

  // submit form thêm/sửa
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      if (editingTask) {
        dispatch({ type: "EDIT_TASK", payload: { ...editingTask, ...values } });
      } else {
        dispatch({
          type: "ADD_TASK",
          payload: {
            id: Date.now(),
            name: values.name,
            level: values.level,
            completed: false,
          },
        });
      }
      setIsModalOpen(false);
    });
  };

  // confirm xoá 1 task
  const handleDeleteOk = () => {
    if (deletingTask) {
      dispatch({ type: "DELETE_TASK", payload: deletingTask.id });
    }
    setIsDeleteModalOpen(false);
    setDeletingTask(null);
  };

  // xoá tất cả
  const handleDeleteAll = () => {
    if (tasks.length === 0) return;

    if (allCompleted) {
      // xoá luôn nếu tất cả đã hoàn thành
      dispatch({ type: "DELETE_ALL" });
    } else {
      // mở modal cảnh báo nếu chưa hoàn thành hết
      setIsWarningModalOpen(true);
    }
  };

  const filteredTasks =
    filterLevel === "Tất cả"
      ? tasks
      : tasks.filter((t) => t.level === filterLevel);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[40%] shadow-md rounded-lg">
        <h2 className="text-center text-xl font-bold mb-4">
          Danh sách công việc
        </h2>

        {/* Bộ lọc + thêm */}
        <div className="flex justify-end items-center gap-2 mb-4">
          <Select
            value={filterLevel}
            style={{ width: 220 }}
            onChange={(value) =>
              dispatch({ type: "FILTER_TASK", payload: value })
            }
          >
            <Option value="Tất cả">Tất cả</Option>
            <Option value="Khẩn cấp">Khẩn cấp</Option>
            <Option value="Quan trọng">Quan trọng</Option>
            <Option value="Bình thường">Bình thường</Option>
            <Option value="Không quan trọng">Không quan trọng</Option>
          </Select>
          <Button type="primary" onClick={openAddModal}>
            Thêm
          </Button>
        </div>

        {/* Danh sách task */}
        <List>
          <div className="space-y-3">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center p-3 border rounded-md shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={task.completed}
                    onChange={() =>
                      dispatch({ type: "TOGGLE_TASK", payload: task.id })
                    }
                  />
                  <span
                    className={`${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.name}
                  </span>
                  <Tag color={levelColor[task.level]}>{task.level}</Tag>
                </div>
                <Space>
                  <Button size="small" onClick={() => openEditModal(task)}>
                    Sửa
                  </Button>
                  <Button
                    danger
                    size="small"
                    onClick={() => openDeleteModal(task)}
                  >
                    Xóa
                  </Button>
                </Space>
              </div>
            ))}
          </div>
        </List>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <span>
            {allCompleted ? (
              <span className="flex items-center gap-1 text-green-600 font-semibold">
                Tất cả công việc đã hoàn thành{" "}
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              </span>
            ) : (
              <>
                Số công việc hoàn thành:{" "}
                <b className="text-black">{completedCount}</b>
              </>
            )}
          </span>
          <Space>
            <Button
              type="primary"
              onClick={() => dispatch({ type: "COMPLETE_ALL" })}
            >
              Hoàn thành tất cả
            </Button>
            <Button danger onClick={handleDeleteAll}>
              Xóa tất cả
            </Button>
          </Space>
        </div>
      </Card>

      {/* Modal thêm/sửa */}
      <Modal
        title={editingTask ? "Cập nhật công việc" : "Thêm mới công việc"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Tên công việc"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập tên công việc" }]}
          >
            <Input placeholder="Nhập tên công việc" />
          </Form.Item>

          <Form.Item
            label="Cấp độ"
            name="level"
            rules={[{ required: true, message: "Chọn cấp độ" }]}
          >
            <Radio.Group>
              <Radio value="Khẩn cấp">Khẩn cấp</Radio>
              <Radio value="Quan trọng">Quan trọng</Radio>
              <Radio value="Bình thường">Bình thường</Radio>
              <Radio value="Không quan trọng">Không quan trọng</Radio>
            </Radio.Group>
          </Form.Item>

          <Button type="primary" block onClick={handleSubmit} className="mt-2">
            {editingTask ? "Cập nhật" : "Thêm mới"}
          </Button>
        </Form>
      </Modal>

      {/* Modal xác nhận xoá 1 task */}
      <Modal
        title="Xác nhận xoá"
        open={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onOk={handleDeleteOk}
        okText="Xóa"
        okButtonProps={{ danger: true }}
        cancelText="Hủy"
      >
        <p>Bạn có chắc chắn muốn xoá công việc này không?</p>
      </Modal>

      {/* Modal cảnh báo khi chưa hoàn thành tất cả */}
      <Modal
        title="Không thể xoá tất cả"
        open={isWarningModalOpen}
        onCancel={() => setIsWarningModalOpen(false)}
        footer={[
          <Button
            key="ok"
            type="primary"
            onClick={() => setIsWarningModalOpen(false)}
          >
            Ok
          </Button>,
        ]}
      >
        <p>Bạn chỉ có thể xoá tất cả khi mọi công việc đã hoàn thành.</p>
      </Modal>
    </div>
  );
}
