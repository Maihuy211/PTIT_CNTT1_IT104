import { Input, Select, Space } from "antd";
import { useAppDispatch } from "../hook/useReducer";
import { getAllTask } from "../apis/taskApi";

const { Option } = Select;

export default function FilterTask() {
  const dispatch = useAppDispatch();

  // Khi người dùng thay đổi bộ lọc => gọi API lại
  const handleFilter = (value: string) => {
    dispatch(getAllTask(value));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <Space className="flex" size="middle">
        {/* Lọc theo trạng thái */}
        <Select
          defaultValue="Tất cả"
          className="w-[150px]"
          onChange={handleFilter}
        >
          <Option value="Tất cả">Tất cả</Option>
          <Option value="true">Đã xong</Option>
          <Option value="false">Chưa xong</Option>
        </Select>

        {/* Lọc theo độ ưu tiên */}
        <Select
          defaultValue="Tất cả"
          className="w-[150px]"
          onChange={handleFilter}
        >
          <Option value="Tất cả">Tất cả</Option>
          <Option value="Cao">Cao</Option>
          <Option value="Trung bình">Trung bình</Option>
          <Option value="Thấp">Thấp</Option>
        </Select>

        {/* Ô tìm kiếm */}
        <Input
          placeholder="Tìm kiếm"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </Space>
    </div>
  );
}
