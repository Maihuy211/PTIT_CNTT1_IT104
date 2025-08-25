import { Component } from "react";
import "./LoginStatus.css";
type StateTypes = {
  isLoggedIn: boolean;
};

export default class LoginStatus extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    const handleClick = () => {
      this.setState((event) => ({
        isLoggedIn: !event.isLoggedIn,
      }));
    };
    return (
      <div className="container">
        <h3>
          {this.state.isLoggedIn
            ? "Xin chào, User!"
            : "Vui lòng đăng nhập để tiếp tục."}
        </h3>
        <button onClick={handleClick}>
          {this.state.isLoggedIn ? "Đăng Xuất" : "Đăng Nhập"}
        </button>
      </div>
    );
  }
}
