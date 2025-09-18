import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import ModalPost from "./ModalPost";
import type { NewPostType } from "./HomePost";

type FieldType = {
  keyword?: string;
  status?: "active" | "inactive" | "all";
};

interface InputPostProps {
  addPost: (newPost: NewPostType) => void;
  setSearchKeyword: (value: string) => void;
  setSearchStatus: (value: "active" | "inactive" | "all") => void;
}

export default function InputPost({
  addPost,
  setSearchKeyword,
  setSearchStatus,
}: InputPostProps) {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleOpenAdd = () => setIsAddOpen(true);
  const handleCloseAdd = () => setIsAddOpen(false);

  // Nhận dữ liệu từ Modal và gọi addPost
  const handleAddPost = (newPost?: NewPostType) => {
    if (newPost) addPost(newPost);
    handleCloseAdd();
  };

  return (
    <div className="flex justify-between h-[40px] mb-[50px]">
      {/* Form tìm kiếm + lọc */}
      <Form<FieldType> layout="inline" className="flex gap-[20px]">
        <Form.Item name="keyword">
          <Input
            type="search"
            placeholder="Nhập từ khoá tìm kiếm"
            allowClear
            className="!h-[100%]"
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </Form.Item>

        <Form.Item name="status">
          <Select
            className="!h-[100%] !w-[140px]"
            defaultValue="all"
            options={[
              { value: "all", label: "Tất cả" },
              { value: "active", label: "Đã xuất bản" },
              { value: "inactive", label: "Ngưng xuất bản" },
            ]}
            onChange={(value) =>
              setSearchStatus(value as "all" | "active" | "inactive")
            } 
          />
        </Form.Item>
      </Form>

      {/* Nút thêm mới */}
      <Button type="primary" className="!h-[100%]" onClick={handleOpenAdd}>
        Thêm mới bài viết
      </Button>

      {/* Modal thêm mới */}
      <ModalPost
        type="add"
        visible={isAddOpen}
        onOk={handleAddPost}
        onCancel={handleCloseAdd}
      />
    </div>
  );
}
