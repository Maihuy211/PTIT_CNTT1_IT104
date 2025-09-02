import { useState } from "react";
import Modal from "../modal/Modal";
import "./Main.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <h2>Ứng dụng React với Modal và Focus Input</h2>
      <button className="open-btn" onClick={handleClick}>
        Mở Modal
      </button>
      <Modal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}
