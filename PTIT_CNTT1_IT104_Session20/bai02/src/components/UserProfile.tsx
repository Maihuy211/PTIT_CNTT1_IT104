import { useState } from "react";
import "./UserProfile.css";
type User = {
  name: string;
  email: string;
};
export default function UserProfile() {
  const [user, setUser] = useState<User>({ name: "", email: "" });
  const [submitted, setSubmitted] = useState<User | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(user);
  };

  return (
    <div className="form-container">
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nhập tên"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={user.email}
          onChange={handleChange}
        />
        <button type="submit">Gửi</button>
      </form>

      {submitted && (
        <div className="result">
          <p>
            <b>Tên:</b> {submitted.name}
          </p>
          <p>
            <b>Email:</b> {submitted.email}
          </p>
        </div>
      )}
    </div>
  );
}
