import React from "react";

interface TodoFormProps {
  inputRef: React.RefObject<HTMLInputElement | null>; // cho phép null
  inputValue: string;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  error: string;
}

export default function TodoForm({
  inputRef,
  inputValue,
  handleChangeInput,
  handleSubmit,
  error,
}: TodoFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="flex-fill">
        <input
          ref={inputRef}
          onChange={handleChangeInput}
          value={inputValue}
          type="text"
          id="form2"
          className="form-control"
        />
        <div>
          {/* Hiển thị lỗi */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>

      <button type="submit" className="btn btn-info ms-2">
        Thêm
      </button>
    </form>
  );
}
