import { Modal, Button, Form, Input } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import type { NewPostType, PostType } from "./HomePost";
import MDEditor from "@uiw/react-md-editor";
type ModalType = "confirm" | "add" | "edit" | "error";

interface ModalPostProps {
  type: ModalType;
  visible: boolean;
  onOk: (data?: NewPostType) => void;
  onCancel: () => void;
  modalMessage?: string;
  postToEdit?: PostType;
}

export default function ModalPost({
  type,
  visible,
  onOk,
  onCancel,
  modalMessage,
  postToEdit,
}: ModalPostProps) {
  const [form] = Form.useForm();

  // Khi modal mở, fill dữ liệu nếu edit, reset nếu add
  useEffect(() => {
    if (type === "edit" && postToEdit) {
      form.setFieldsValue({
        title: postToEdit.title,
        img: postToEdit.img,
      });
    }

    if (type === "add") {
      form.resetFields();
    }
  }, [type, postToEdit, visible, form]);

  const handleReset = () => {
    form.resetFields();
  };

  const handlePublish = async () => {
    try {
      const values = await form.validateFields();
      const newPost: NewPostType = {
        title: values.title,
        img: values.img,
        createAt:
          type === "edit" && postToEdit
            ? postToEdit.createAt
            : new Date().toISOString().slice(0, 10),
        status: type === "edit" && postToEdit ? postToEdit.status : "active",
      };
      onOk(newPost);
      handleReset();
    } catch (err) {
      console.error("Validate thất bại:", err);
    }
  };

  // Modal confirm
  if (type === "confirm") {
    return (
      <Modal
        title="Xác nhận"
        open={visible}
        onOk={() => onOk()}
        onCancel={onCancel}
        okText="Xác nhận"
        cancelText="Hủy"
        okType="primary"
        className="!w-[350px]"
      >
        <div className="flex items-center gap-2">
          <ExclamationCircleOutlined
            style={{ color: "#faad14", fontSize: 20 }}
          />
          <span>{modalMessage}</span>
        </div>
      </Modal>
    );
  }

  // Modal add / edit
  return (
    <Modal
      className="!w-[450px]"
      title={type === "add" ? "Thêm mới bài viết" : "Sửa bài viết"}
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="reset" onClick={handleReset}>
          Làm mới
        </Button>,
        <Button key="publish" type="primary" onClick={handlePublish}>
          {type === "add" ? "Xuất bản" : "Cập nhật"}
        </Button>,
      ]}
      width={600}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Tên bài viết"
          name="title"
          rules={[{ required: true, message: "Nhập tên bài viết!" }]}
        >
          <Input placeholder="Nhập tên bài viết" />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="img"
          rules={[{ required: true, message: "Nhập URL hình ảnh!" }]}
        >
          <Input placeholder="URL hình ảnh" />
        </Form.Item>
        <Form.Item label="Nội dung">
          {" "}
          <div data-color-mode="light">
            {" "}
            <MDEditor height={200} />{" "}
          </div>{" "}
        </Form.Item>
      </Form>
    </Modal>
  );
}
