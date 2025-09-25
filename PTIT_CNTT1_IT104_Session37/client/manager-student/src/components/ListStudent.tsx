import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Modal, Spin } from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook/useReducer";
import { deleteStudent, getAllStudent } from "../apis/student.apis";
import type { Student, FilterState } from "../interface/student.interface";
import { getStudentDetail } from "../redux/slices/studnet.slices";

interface ListStudentProps {
  filters: FilterState;
}

export default function ListStudent({ filters }: ListStudentProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student>();

  const {
    data: student,
    error,
    status,
  } = useAppSelector((store) => store.student);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStudent());
  }, [dispatch]);

  const handleDeleteClick = (student: Student) => {
    setStudentToDelete(student);
    setIsDeleteOpen(true);
  };

  const handleOkDelete = () => {
    if (studentToDelete?.id) {
      dispatch(deleteStudent(studentToDelete.id));
    }
    setIsDeleteOpen(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteOpen(false);
  };

  let filtered = student || [];

  if (filters.search) {
    filtered = filtered.filter(
      (s) =>
        s.name && s.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  }

  if (filters.grade !== "all") {
    filtered = filtered.filter((s) => s.grade === filters.grade);
  }

  if (filters.sort === "az") {
    filtered = [...filtered].sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );
  } else if (filters.sort === "za") {
    filtered = [...filtered].sort((a, b) =>
      (b.name || "").localeCompare(a.name || "")
    );
  } else if (filters.sort === "ageAsc") {
    filtered = [...filtered].sort((a, b) => (a.age || 0) - (b.age || 0));
  } else if (filters.sort === "ageDesc") {
    filtered = [...filtered].sort((a, b) => (b.age || 0) - (a.age || 0));
  }

  if (error) {
    return (
      <h1 className="flex justify-center mt-5">
        Đã có lỗi xảy ra. Vui lòng kiểm tra lại
      </h1>
    );
  }

  return (
    <div>
      {/* Loading overlay */}
      {status === "pending" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Spin
            indicator={
              <LoadingOutlined
                style={{ fontSize: 65, color: "#5d9fdf" }}
                spin
              />
            }
          />
        </div>
      )}

      {/* Student List */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {status === "success" && filtered.length === 0 ? (
          <div className="flex justify-center">
            <div className="ml-[300px] text-center text-gray-500">
              Không có dữ liệu
            </div>
          </div>
        ) : (
          status === "success" &&
          filtered.map((s) => (
            <div
              key={s.id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{s.name}</p>
                <p className="text-gray-500 text-sm">
                  Age: {s.age} - Grade: {s.grade}
                </p>
              </div>
              <div className="flex gap-2">
                <EditOutlined
                  className="cursor-pointer text-blue-500"
                  onClick={() => dispatch(getStudentDetail(s))}
                />
                <DeleteOutlined
                  className="cursor-pointer text-red-500"
                  onClick={() => handleDeleteClick(s)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal xác nhận */}
      <Modal
        className="!w-[400px]"
        title="Xác nhận"
        open={isDeleteOpen}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
        okText="Xóa"
        cancelText="Hủy"
        okButtonProps={{ danger: true }}
      >
        <div className="flex items-center gap-3">
          <ExclamationCircleOutlined className="!text-red-500 text-2xl" />
          <p>Bạn có chắc chắn muốn xoá học sinh này không?</p>
        </div>
      </Modal>
    </div>
  );
}
