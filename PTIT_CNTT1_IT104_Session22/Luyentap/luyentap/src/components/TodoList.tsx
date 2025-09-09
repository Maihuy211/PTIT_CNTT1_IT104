import {
  Button,
  Checkbox,
  Input,
  List,
  Form,
  type FormProps,
  Modal,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

type FieldType = {
  id?: number;
  todo: string;
};

export default function TodoListUI() {
  // lấy dữ liệu
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // trạng thái đóng mở
  const [isModalOpen, setIsModalOpen] = useState(false);

  // lấy id
  const [id, setId] = useState<number | null>(null);

  // lấy dữ liệu từ form
  const [form] = Form.useForm();

  //cập nhật giá trị vào trong form (đc update khi có thay đổi )
  //   useEffect(() => {
  //     // cập nhật giá trị dùng phương thức
  //     form.setFieldsValue(todos);
  //   }, [form, todos]);

  // lưu localStori
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // thêm sửa trong này
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (id === null) {
      // Thêm
      const newTodo: Todo = {
        id: Math.ceil(Math.random() * 100),
        ...values,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    } else {
      // Sửa
      setTodos((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...values } : item))
      );
      setId(null);
    }
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  // mở modal
  const showDeleteModal = (id: number) => {
    setId(id);
    setIsModalOpen(true);
  };

  // đóng modal
  const handleCancel = () => {
    setIsModalOpen(false);
    setId(null);
  };

  // muốn xóa
  const handleOk = () => {
    // logic xóa
    setTodos((prev) => prev.filter((item) => item.id !== id));
    setIsModalOpen(false);
    setId(null);
  };

  // hàm gọi sửa
  const handleEdit = (todo: Todo) => {
    if (id === todo.id) {
      // Nếu đang sửa mà click lần nữa -> hủy sửa
      setId(null);
      form.resetFields();
    } else {
      // Nếu chưa sửa -> set vào form
      setId(todo.id);
      form.setFieldsValue({ todo: todo.todo });
    }
  };

  // hàm khi đánh giấu hoàn thành
  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const len = todos.length;
  const lenComplete = todos.filter((t) => t.completed).length;
  return (
    // tiêu đề
    <div className="w-[500px] mx-auto mt-3 ">
      <div className="text-center text-[30px] mb-3">Danh sách công việc</div>

      {/* Form thêm công việc */}
      <Form
        form={form}
        name="addTodo"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="flex justify-between gap-1"
      >
        <Form.Item<FieldType>
          name="todo"
          rules={[{ required: true, message: "Vui lòng nhập tên công việc!" }]}
          className="w-[100%]"
        >
          <Input />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            {id === null ? "Thêm" : "Sửa"}
          </Button>
        </Form.Item>
      </Form>

      {/* Danh sách công việc */}
      <List
        bordered
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <div className="flex gap-3 text-[20px]">
                <EditOutlined
                  className=" !text-blue-500"
                  onClick={() => handleEdit(item)}
                />
                <DeleteOutlined
                  className="!text-red-500"
                  onClick={() => showDeleteModal(item.id)}
                />
              </div>,
            ]}
          >
            <Checkbox
              checked={item.completed}
              onChange={() => toggleComplete(item.id)}
              className="flex items-center gap-2"
            >
              <span className={item.completed ? "line-through" : ""}>
                {item.todo}
              </span>
            </Checkbox>
          </List.Item>
        )}
      />

      <Modal
        centered
        title="Xác nhận xóa"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Xóa"
        okType="danger"
        cancelText="Hủy"
      >
        Bạn có chắc chắn muốn xóa công việc này?
      </Modal>
      <div className="text-center text-green-700 mt-2">
        {lenComplete} / {len} công việc đã hoàn thành
      </div>
    </div>
  );
}
