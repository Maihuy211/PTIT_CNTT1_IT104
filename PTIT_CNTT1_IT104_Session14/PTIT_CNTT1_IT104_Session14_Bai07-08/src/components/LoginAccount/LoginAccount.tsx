import { Component } from "react";
import "./LoginAccount.css";

type Student = {
  email: string;
  password: string;
};
type StateTypes = {
  student: Student;
  message: string;
  isError: boolean;
};

export default class LoginAccount extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      student: {
        email: "",
        password: "",
      },
      message: "",
      isError: false,
    };
  }

  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState({
        student: {
          ...this.state.student,
          [name]: value,
        },
      });
    };

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const { email, password } = this.state.student;

      const storedData = localStorage.getItem("students");
      const students: Student[] = storedData ? JSON.parse(storedData) : [];

      if (email === "" || password === "") {
        this.setState({
          message: "Email và Mật khẩu không được để trống",
          isError: true,
        });
        return;
      }

      const isValid = students.some(
        (s) => s.email === email && s.password === password
      );

      if (isValid) {
        this.setState({
          message: "Đăng nhập thành công",
          isError: false,
          student: { email: "", password: "" },
        });
      } else {
        this.setState({
          message: "Đăng nhập thất bại",
          isError: true,
        });
      }
    };

    return (
      <div className="form-container">
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={this.state.student.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mật Khẩu</label>
            <input
              name="password"
              type="password"
              value={this.state.student.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>
        <p
          className="message"
          style={{ color: this.state.isError ? "red" : "green" }}
        >
          {this.state.message}
        </p>
      </div>
    );
  }
}
