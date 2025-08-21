import { Component } from "react";
import "./Change.css";

type StateType = {
  text: string;
};

export default class Change extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      text: "Rikkei Academy",
    };
  }
  render() {
    const handleChange = () => {
      this.setState({
        text: "RikkeiSoft",
      });
    };
    return (
      <div>
        <h3>Company : {this.state.text}</h3>
        <button onClick={handleChange}>Change State</button>
      </div>
    );
  }
}
