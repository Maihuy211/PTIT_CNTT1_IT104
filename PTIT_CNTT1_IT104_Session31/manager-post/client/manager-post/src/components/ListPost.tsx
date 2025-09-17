import { Button, Space, Table, Tag, type TableProps } from "antd";
import type { NewPostType, PostType } from "./HomePost";
import ModalPost from "./ModalPost";
import { useState } from "react";

interface PostListProps {
  posts: PostType[];
  toggleTask: (id: number, status: "active" | "inactive") => void;
  updatePost: (id: number, updatedPost: NewPostType) => void;
}

export default function ListPost({
  posts,
  toggleTask,
  updatePost,
}: PostListProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const [modalType, setModalType] = useState<"confirm" | "edit">("confirm");
  // Mở modal confirm
  const showConfirmModal = (post: PostType) => {
    setSelectedPost(post);
    setModalType("confirm");
    setIsModalVisible(true);
  };

  // Mở modal edit
  const showEditModal = (post: PostType) => {
    setSelectedPost(post);
    setModalType("edit");
    setIsModalVisible(true);
  };

  const handleOk = (data?: NewPostType) => {
    if (modalType === "confirm" && selectedPost) {
      toggleTask(selectedPost.id, selectedPost.status);
    }
    if (modalType === "edit" && selectedPost && data) {
      updatePost(selectedPost.id, data);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns: TableProps<PostType>["columns"] = [
    { title: "STT", dataIndex: "id", key: "id" },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "img",
      key: "img",
      render: (text) => (
        <img
          src={text}
          alt="ảnh minh hoạ"
          className="w-14 h-14 object-cover rounded-full"
        />
      ),
    },
    { title: "Ngày viết", dataIndex: "createAt", key: "createAt" },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: string) =>
        status === "active" ? (
          <Tag color="green">Đã xuất bản</Tag>
        ) : (
          <Tag color="red">Ngưng xuất bản</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="!bg-amber-500 !text-white"
            onClick={() => showConfirmModal(record)}
          >
            {record.status === "active" ? "Chặn" : "Bỏ Chặn"}
          </Button>
          <Button
            className="!border-amber-500 bg-amber-300 !text-amber-500"
            onClick={() => showEditModal(record)}
          >
            Sửa
          </Button>
          <Button className="!border-red-500 !text-red-500 !bg-red-300">
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={posts}
        rowKey="id"
        className="!border-gray-800"
        bordered
      />

      <ModalPost
        type={modalType}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        postToEdit={
          modalType === "edit" && selectedPost ? selectedPost : undefined
        }
        modalMessage={
          modalType === "confirm"
            ? selectedPost?.status === "active"
              ? "Bạn có chắc chắn muốn chặn bài viết?"
              : "Bạn có chắc chắn muốn bỏ chặn bài viết?"
            : undefined
        }
      />
    </div>
  );
}
