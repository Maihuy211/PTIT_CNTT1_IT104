import React from "react";

interface ConfirmModalProps {
  show: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  title = "Xác nhận",
  message,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
          textAlign: "center",
        }}
      >
        <h3>{title}</h3>
        <p>{message}</p>
        <div
          style={{
            marginTop: "15px",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={onConfirm}
            style={{
              background: "red",
              color: "#fff",
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Xóa
          </button>
          <button
            onClick={onCancel}
            style={{
              padding: "6px 12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
