import { useState, type ChangeEvent, type FormEvent } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, name: "Trường này là bắt buộc" }));
    } else {
      setErrors((prev) => ({ ...prev, name: undefined }));
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, email: "Trường này là bắt buộc" }));
    } else if (
      !value.includes("@") ||
      !(
        value.endsWith(".com") ||
        value.endsWith(".vn") ||
        value.endsWith(".edu")
      )
    ) {
      setErrors((prev) => ({ ...prev, email: "Email không hợp lệ" }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!errors.name && !errors.email && name && email) {
      alert("Gửi thành công!");
    }
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Đăng Kí thông tin</h2>

        <div className="form-group">
          <label>Họ tên:</label>
          <input type="text" value={name} onChange={handleNameChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <button type="submit">
          Gửi
        </button>
      </form>
    </div>
  );
}
