import { Component } from "react";
import "./ClickCounter.css";
type StateTypes = {
  count: number;
};
export default class ClickCounter extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const handleClick = () => {
      this.setState((event) => ({
        count: event.count + 1,
      }));
    };
    return (
      <div>
        <h3>Count:{this.state.count}</h3>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
  }
}
