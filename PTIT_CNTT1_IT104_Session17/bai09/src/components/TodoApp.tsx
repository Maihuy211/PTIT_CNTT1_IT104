import React, { useEffect, useRef, useState } from "react";
import { v7 as generateId } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import ConfirmModal from "./ConfirmModal";

export interface Job {
  id: number | string;
  name: string;
  isCompleted: boolean;
}

export default function TodoApp() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Quản lý công việc";
    inputRef.current?.focus();
  }, []);

  const [inputValue, setInputValue] = useState<string>("");
  const [listJob, setListJob] = useState<Job[]>(() => {
    const listJobLocal = localStorage.getItem("listJob");
    return (listJobLocal && JSON.parse(listJobLocal)) || [];
  });

  const [error, setError] = useState("");
  const [jobToDelete, setJobToDelete] = useState<Job | null>(null); // <== thêm state

  const saveData = (updateData: Job[]) => {
    setListJob(updateData);
    localStorage.setItem("listJob", JSON.stringify(updateData));
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      setError("Tên công việc không được để trống");
      return;
    }

    const isDuplicate = listJob.some(
      (job) => job.name.toLowerCase() === trimmedValue.toLowerCase()
    );
    if (isDuplicate) {
      setError("Tên công việc đã tồn tại");
      return;
    }

    const newJob: Job = {
      id: generateId(),
      name: trimmedValue,
      isCompleted: false,
    };

    saveData([...listJob, newJob]);
    setInputValue("");
    setError("");
  };

  // Khi click nút xóa thì mở modal
  const handleDelete = (job: Job) => {
    setJobToDelete(job);
  };

  // Khi confirm trong modal
  const confirmDelete = () => {
    if (jobToDelete) {
      const filterJob = listJob.filter((j) => j.id !== jobToDelete.id);
      saveData(filterJob);
      setJobToDelete(null);
    }
  };

  // Khi hủy trong modal
  const cancelDelete = () => {
    setJobToDelete(null);
  };

  const handleChangeStatus = (id: number | string) => {
    const listJobUpdated = listJob.map((job) =>
      job.id === id ? { ...job, isCompleted: !job.isCompleted } : job
    );
    saveData(listJobUpdated);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                  Quản lý công việc
                </h3>

                <TodoForm
                  inputRef={inputRef}
                  inputValue={inputValue}
                  handleChangeInput={handleChangeInput}
                  handleSubmit={handleSubmit}
                  error={error}
                />

                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active">Tất cả công việc</a>
                  </li>
                </ul>

                <TodoList
                  listJob={listJob}
                  handleDelete={handleDelete}
                  handleChangeStatus={handleChangeStatus}
                />

                {/* Modal xác nhận xóa */}
                <ConfirmModal
                  show={!!jobToDelete}
                  message={`Bạn có muốn xóa công việc "${jobToDelete?.name}" không?`}
                  onConfirm={confirmDelete}
                  onCancel={cancelDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
