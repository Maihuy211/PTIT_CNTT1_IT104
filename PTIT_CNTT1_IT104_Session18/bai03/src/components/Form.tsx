import React, { useState, useCallback } from "react";
import "./Form.css";
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(formData);
    },
    [formData]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <br />
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
