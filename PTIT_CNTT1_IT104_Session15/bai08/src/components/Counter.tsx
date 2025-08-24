import { Component } from "react";
import "./Counter.css";
type StateTypes = {
  count: number;
};

export default class Counter extends Component<object, StateTypes> {
  //timerId có thể lưu ID do setInterval trả về (dù là number hay Timeout, tuỳ môi trường) hoặc
  // undefined (nếu chưa khởi tạo).
  timerId: ReturnType<typeof setInterval> | number | undefined = undefined;
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        count: this.state.count === 10 ? 0 : this.state.count + 1,
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
        <h2>Counter: {this.state.count}</h2>
      </div>
    );
  }
}
