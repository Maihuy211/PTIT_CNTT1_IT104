import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  type FormProps,
  type TableProps,
} from "antd";
import { useEffect, useState } from "react";

type MemberType = {
  id: number;
  fullName: string;
  phoneNumber: string;
  status: "active" | "inactive";
};

type FieldType = {
  fullName: string;
  phoneNumber: string;
  status: "active" | "inactive";
};

export default function ManagerStudent() {
  // tạo hàng ..
  const columns: TableProps<MemberType>["columns"] = [
    {
      title: "Tên thành viên",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) =>
        status === "active" ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Bị khóa</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="!border-blue-500 !text-blue-500"
            onClick={() => handleEdit(record)}
          >
            Sửa
          </Button>
          <Button
            className="!border-red-500 !text-red-500"
            onClick={() => showDeleteModal(record.id)}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  // lưu trữ mảng dữ liệu
  const [members, setMembers] = useState<MemberType[]>(() => {
    const saved = localStorage.getItem("members");
    return saved ? JSON.parse(saved) : [];
  });
  // kiẻm soát mở
  const [isModalOpen, setIsModalOpen] = useState(false);

  // id
  const [id, setId] = useState<number | null>(null);

  const [form] = Form.useForm();

  // lưu localStori
  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  // thêm sửa
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (id === null) {
      // Thêm
      const newMember: MemberType = {
        id: Math.ceil(Math.random() * 100),
        ...values,
      };
      setMembers([...members, newMember]);
    } else {
      // Sửa
      setMembers((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...values } : item))
      );
      setId(null);
    }
    form.resetFields();
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

  // thực hiện xóa
  const handleOk = () => {
    // logic xóa
    setMembers((prev) => prev.filter((item) => item.id !== id));
    setIsModalOpen(false);
    setId(null);
  };

  const handleEdit = (member: MemberType) => {
    if (id === member.id) {
      // Nếu đang sửa mà click lần nữa -> hủy sửa
      setId(null);
      form.resetFields();
    } else {
      // Nếu chưa sửa -> set vào form
      setId(member.id);
      form.setFieldsValue({
        fullName: member.fullName,
        phoneNumber: member.phoneNumber,
        status: member.status,
      });
    }
  };

  return (
    <div className="w-[800px] mx-auto mt-3 flex flex-col justify-center gap-[30px]">
      <div className="p-[10px] bg-blue-400 text-[30px] flex justify-center rounded-[12px] w-[800px]">
        <h1 className="text-white">Quản lí thành viên</h1>
      </div>

      {/* Form thêm thành viên */}
      <div className="border-2 rounded-[8px] p-3 border-gray-300">
        <h3 className="font-semibold text-[25px] mb-[30px]">
          + Thêm thành viên mới
        </h3>
        <Form
          form={form}
          name="formAddStudent"
          onFinish={onFinish}
          autoComplete="off"
          className="flex gap-[30px]"
        >
          <Form.Item<FieldType>
            name="fullName"
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          >
            <Input placeholder="Tên thành viên" />
          </Form.Item>

          <Form.Item<FieldType>
            name="phoneNumber"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>

          <Form.Item<FieldType>
            name="status"
            rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}
            className="w-[150px]"
          >
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Bị khóa" },
              ]}
              placeholder="Chọn trạng thái"
            />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              {id === null ? "Thêm" : "Sửa"}
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Danh sách thành viên */}
      <div className="border-2 rounded-[8px] p-3 border-gray-300">
        <h3 className="font-semibold text-[25px] mb-[30px]">
          Danh sách thành viên
        </h3>
        <Table<MemberType>
          columns={columns}
          dataSource={members}
          pagination={{ pageSize: 3 }}
          rowKey="id"
        />
      </div>
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
        Bạn có chắc chắn muốn xóa thành viên này này?
      </Modal>
    </div>
  );
}
