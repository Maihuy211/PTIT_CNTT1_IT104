import { Component, createRef } from "react";
import "./RegisterAccount.css";

type Student = {
  fullname: string;
  email: string;
  password: string;
};
type StateTypes = {
  student: Student;
  message: string;
  isError: boolean;
};
export default class RegisterAccount extends Component<object, StateTypes> {
  fullnameRef = createRef<HTMLInputElement>();
  constructor(props: object) {
    super(props);
    this.state = {
      student: {
        fullname: "",
        email: "",
        password: "",
      },
      message: "",
      isError: false, // thêm biến check vào state
    };
  }
  componentDidMount() {
    this.fullnameRef.current?.focus();
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
      const { fullname, email, password } = this.state.student;

      const storedData = localStorage.getItem("students");
      const students: Student[] = storedData ? JSON.parse(storedData) : [];

      // Validate
      if (fullname === "" || email === "" || password === "") {
        this.setState({
          message: "Tên sinh viên, Email và Mật khẩu không được để trống",
          isError: true,
        });
        return;
      }

      const emailExists = students.some((s) => s.email === email);
      if (emailExists) {
        this.setState({
          message: "Email không được phép trùng",
          isError: true,
        });
        return;
      }

      students.push({ fullname, email, password });
      localStorage.setItem("students", JSON.stringify(students));

      // reset form
      this.setState({
        student: { fullname: "", email: "", password: "" },
        message: "Đăng ký thành công",
        isError: false,
      });
      this.fullnameRef.current?.focus();
    };

    return (
      <div className="form-container">
        <h2>Đăng kí tài khoản</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Tên sinh viên</label>
            <input
              type="text"
              name="fullname"
              value={this.state.student.fullname}
              onChange={handleChange}
              ref={this.fullnameRef}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              value={this.state.student.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Mật Khẩu</label>
            <input
              name="password"
              type="password"
              value={this.state.student.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
        <p
          className="message"
          style={{ color: this.state.isError ? "red" : "green" }}
        >
          {this.state.message ? this.state.message : ""}
        </p>
      </div>
    );
  }
}
