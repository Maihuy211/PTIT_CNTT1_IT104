import { Component } from "react";
import "./Change.css";

type StateType = {
  text: string;
};

export default class Change extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      text: "Học code để đi làm",
    };
  }
  //
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const handleChange = () => {
      this.setState({
        text: "Học code sẽ thành công. Cố lên!!!",
      });
    };
    return (
      <div>
        <h3>Slogan : {this.state.text}</h3>
        <button onClick={handleChange}>Change State</button>
      </div>
    );
  }
}
