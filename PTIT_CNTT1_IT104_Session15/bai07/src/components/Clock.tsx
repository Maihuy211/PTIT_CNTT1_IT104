import { Component } from "react";
import "./Clock.css";
type StateTypes = {
  time: Date;
};

export default class Clock extends Component<object, StateTypes> {
  //timerId có thể lưu ID do setInterval trả về (dù là number hay Timeout, tuỳ môi trường) hoặc
  // undefined (nếu chưa khởi tạo).
  timerId: ReturnType<typeof setInterval> | number | undefined = undefined;
  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div>
        <h2>thoi gian hien tai: {this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
