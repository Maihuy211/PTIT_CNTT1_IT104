import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";
import { Table, Button, Space, Modal, Form, Input, Checkbox } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function ManagerStudent() {
  const [form] = Form.useForm<Student>();
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  // State modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // mở modal thêm mới
  const showAddModal = () => {
    setIsAddModalOpen(true);
  };

  // đóng modal thêm mới
  const handleCancelAdd = () => {
    setIsAddModalOpen(false);
    form.resetFields();
  };

  // mở modal xóa
  const showDeleteModal = (student: Student) => {
    setSelectedStudent(student);
    setIsDeleteModalOpen(true);
  };

  // đóng modal xóa
  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setSelectedStudent(null);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<Student> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // bai 04
  const getAllStudent = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students");
      setStudents(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // bai 05
  const getStudentById = async (id: number) => {
    try {
      const res = await axios.get(`http://localhost:8080/students/${id}`);

      if (res.data) {
        console.log("Thông tin sinh viên:", res.data);
      } else {
        console.log("Không tìm thấy bản ghi");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 404) {
          console.log("Không tìm thấy bản ghi");
        } else {
          console.error("Lỗi:", error.message);
        }
      } else {
        console.error("Lỗi không xác định:", error);
      }
    }
  };
  // bai06
  const createStudent = async () => {
    try {
      const values = await form.validateFields();

      const student: Student = {
        id: Math.floor(Math.random() * 1000000), // random id
        student_name: values.student_name,
        email: values.email,
        address: values.address,
        phone: values.phone,
        status: values.status || false,
        created_at: new Date().toISOString(),
      };

      const response = await axios.post(
        "http://localhost:8080/students",
        student
      );

      if (response.status === 201) {
        console.log("Thêm sinh viên thành công:", response.data);

        // Thêm trực tiếp vào state students
        setStudents((prev) => [...prev, response.data]);

        // Reset form & đóng modal
        form.resetFields();
        setIsAddModalOpen(false);
      }
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error);
    }
  };

  //bai08
const handleOkDelete = async () => {
    if (!selectedStudent) return;

    try {
      const response = await axios.delete(
        `http://localhost:8080/students/${selectedStudent.id}`
      );

      if (response.status === 200) {
        console.log("Xóa thành công:", selectedStudent);

        setStudents((prev) =>
          prev.filter((st) => st.id !== selectedStudent.id)
        );
      }
    } catch (error) {
      console.error("Lỗi khi xóa sinh viên:", error);
    } finally {
      setIsDeleteModalOpen(false);
      setSelectedStudent(null);
    }
  };
  useEffect(() => {
    getAllStudent();
    getStudentById(3);
  }, []);

  const columns: TableColumnsType<Student> = [
    {
      title: "Tên sinh viên",
      dataIndex: "student_name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Lựa chọn",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined style={{ color: "orange" }} />}
            onClick={() => console.log("Sửa:", record)}
          />
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => showDeleteModal(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-5">
      <div className="bg-white shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#435d7d] flex items-center justify-between px-5 py-3 h-[100px]">
          <h2 className="text-lg text-white">
            Quản lý <span className="text-white font-bold">sinh viên</span>
          </h2>
          <Button
            icon={<PlusCircleOutlined />}
            className="!bg-[#28a745] !border-none hover:bg-green-600 !text-white"
            onClick={showAddModal}
          >
            Thêm mới sinh viên
          </Button>
        </div>

        {/* Table */}
        <div className="p-4">
          <Table<Student>
            rowSelection={rowSelection}
            columns={columns}
            dataSource={students.map((st) => ({ ...st, key: st.id }))}
            pagination={{ pageSize: 5 }}
          />
        </div>
      </div>

      {/* Modal thêm mới */}
      <Modal
        title="Thêm sinh viên"
        open={isAddModalOpen}
        onCancel={handleCancelAdd}
        onOk={createStudent}
        okText="OK"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical" name="studentForm">
          <Form.Item<Student>
            label="Họ tên"
            name="student_name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Student>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Student>
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Student>
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Student> name="status" valuePropName="checked">
            <Checkbox>Hoạt động</Checkbox>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal xác nhận xóa */}
      <Modal
        centered
        title="Xác nhận xóa"
        open={isDeleteModalOpen}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
        okText="Xóa"
        okType="danger"
        cancelText="Hủy"
      >
        <p>
          Bạn có chắc chắn muốn xóa{" "}
          <span className="font-semibold">{selectedStudent?.student_name}</span>
          ?
        </p>
      </Modal>
    </div>
  );
}
