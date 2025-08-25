import { Component } from "react";
import "./UserForm.css";

type User = {
  name: string;
  email: string;
  age: number;
};

type StateTypes = {
  user: User;
  error: string;
  submitted: boolean;
};

export default class UserForm extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        age: 0,
      },
      error: "",
      submitted: false,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prev) => ({
      user: {
        ...prev.user,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, age } = this.state.user;

    if (!email.includes("@")) {
      this.setState({
        error: "Email không hợp lệ",
        submitted: false,
      });
      return;
    }
    if (age < 0) {
      this.setState({
        error: "Tuổi không được âm",
        submitted: false,
      });
      return;
    }

    this.setState({
      error: "",
      submitted: true,
    });
  };

  handleReset = () => {
    this.setState({
      user: {
        name: "",
        email: "",
        age: 0,
      },
      error: "",
      submitted: false,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>Nhập thông tin người dùng</h3>
          <div className="inputStyle">
            <input
              type="text"
              name="name"
              placeholder="Họ tên"
              value={this.state.user.name}
              onChange={this.handleChange}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.user.email}
              onChange={this.handleChange}
              className="form-input"
            />
            <input
              type="number"
              name="age"
              placeholder="Tuổi"
              value={this.state.user.age || ""}
              onChange={this.handleChange}
              className="form-input"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn">
              Gửi
            </button>
            <button type="button" onClick={this.handleReset} className="btn">
              Xóa tất cả
            </button>
          </div>
        </form>
        <p className="error">{this.state.error}</p>
        {this.state.submitted && !this.state.error && (
          <div className="user">
            <h4>Thông tin đã nhập</h4>
            <p>
              <b>Họ tên:</b> {this.state.user.name}
            </p>
            <p>
              <b>Email:</b> {this.state.user.email}
            </p>
            <p>
              <b>Tuổi:</b> {this.state.user.age}
            </p>
          </div>
        )}
      </div>
    );
  }
}
