import { useEffect, useState } from "react";
import { Button, Input, Select, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../hook/useReducer";
import type { Student } from "../interface/student.interface";
import { createStudent, updateStudent } from "../apis/student.apis";
import { getStudentDetail } from "../redux/slices/studnet.slices";

const { Option } = Select;

export default function StudentModal() {
  const dispatch = useAppDispatch();
  const { student, data } = useAppSelector((store) => store.student);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [grade, setGrade] = useState<string>("CNTT1");
  const [error, setError] = useState<string>("");

  // Khi bấm "Sửa"
  useEffect(() => {
    if (student) {
      setName(student.name || "");
      setAge(student.age?.toString() || "");
      setGrade(student.grade || "CNTT1");
      setIsEdit(true);
      setIsModalOpen(true);
    }
  }, [student]);

  const showModal = () => {
    // reset form khi thêm mới
    setName("");
    setAge("");
    setGrade("CNTT1");
    setError("");
    setIsEdit(false);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setError("");
    dispatch(getStudentDetail(null)); // reset student sau khi đóng
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Tên học sinh không được để trống!");
      return;
    }
    if (!age.trim() || Number(age) <= 0) {
      setError("Tuổi phải lớn hơn 0!");
      return;
    }

    const isDuplicate = data.some(
      (s: Student) =>
        s.name?.toLowerCase() === name.trim().toLowerCase() &&
        s.id !== student?.id
    );
    if (isDuplicate) {
      setError("Tên học sinh đã tồn tại!");
      return;
    }

    const newStudent: Student = {
      name: name.trim(),
      age: Number(age),
      grade,
    };

    if (isEdit && student) {
      dispatch(updateStudent({ id: student.id || 0, ...newStudent }));
    } else {
      dispatch(createStudent(newStudent));
    }

    setIsModalOpen(false);
    dispatch(getStudentDetail(null)); // reset student sau khi lưu
  };

  return (
    <div className="p-4">
      <Button type="primary" onClick={showModal}>
        ADD STUDENT
      </Button>

      <Modal
        title={isEdit ? "Edit Student" : "Add Student"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Tên học sinh</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên học sinh"
            />
          </div>

          <div>
            <label className="block mb-1">Tuổi</label>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Nhập tuổi"
            />
          </div>

          <div>
            <label className="block mb-1">Lớp</label>
            <Select
              value={grade}
              onChange={(value) => setGrade(value)}
              className="w-full"
            >
              <Option value="CNTT1">CNTT1</Option>
              <Option value="CNTT2">CNTT2</Option>
              <Option value="CNTT3">CNTT3</Option>
              <Option value="CNTT4">CNTT4</Option>
            </Select>
          </div>

          {error && <span className="text-red-500 text-xs">{error}</span>}

          <div className="flex justify-end gap-2 pt-2">
            <Button onClick={handleCancel}>CANCEL</Button>
            <Button type="primary" htmlType="submit">
              {isEdit ? "SAVE" : "ADD"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
