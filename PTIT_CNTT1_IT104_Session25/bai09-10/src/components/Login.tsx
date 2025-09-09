import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<User>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Kiểm tra tài khoản
    const user = users.find(
      (u: User) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      setError("Email hoặc mật khẩu không đúng!");
      return;
    }

    // Lưu user đang đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    navigate("/home");
  };

  return (
    <div className="bg-white flex items-center justify-center rounded-2xl">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-slate-800 text-center mb-6 w-[400px]">
          Login account
        </h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-white h-[40px] text-[14px]"
          >
            Login an account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-gray-500 hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
