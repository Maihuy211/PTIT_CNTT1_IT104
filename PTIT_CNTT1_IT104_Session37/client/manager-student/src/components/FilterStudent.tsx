import { Button, Input, Select } from "antd";
import type { FilterStudentProps } from "../interface/student.interface";

const { Option } = Select;

export default function FilterStudent({
  filters,
  setFilters,
}: FilterStudentProps) {
  return (
    <div className="flex items-center gap-2 mt-4 bg-white p-4 rounded-lg shadow-sm">
      {/* Tìm kiếm theo tên */}
      <Input
        placeholder="Tìm theo tên"
        className="w-1/3"
        value={filters.search}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, search: e.target.value }))
        }
      />

      {/* Lọc theo lớp */}
      <Select
        value={filters.grade}
        className="w-1/5"
        onChange={(value) => setFilters((prev) => ({ ...prev, grade: value }))}
      >
        <Option value="all">Tất cả</Option>
        <Option value="CNTT1">CNTT1</Option>
        <Option value="CNTT2">CNTT2</Option>
        <Option value="CNTT3">CNTT3</Option>
        <Option value="CNTT4">CNTT4</Option>
      </Select>

      {/* Sắp xếp */}
      <Select
        value={filters.sort}
        className="w-1/5"
        onChange={(value) => setFilters((prev) => ({ ...prev, sort: value }))}
      >
        <Option value="az">Name A → Z</Option>
        <Option value="za">Name Z → A</Option>
        <Option value="ageAsc">Age ↑</Option>
        <Option value="ageDesc">Age ↓</Option>
      </Select>

      {/* Nút clear */}
      <Button
        danger
      >
        Clear
      </Button>
    </div>
  );
}
