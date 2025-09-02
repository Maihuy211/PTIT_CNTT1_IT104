import { useEffect, useRef } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Đăng nhập</h3>
        <input type="text" placeholder="Nhập tên người dùng" ref={inputRef} />
        <button className="close-btn" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
}
