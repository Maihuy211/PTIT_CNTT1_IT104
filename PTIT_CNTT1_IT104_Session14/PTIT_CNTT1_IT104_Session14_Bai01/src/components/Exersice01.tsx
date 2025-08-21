import { Component } from "react";
import "./Exersice01.css";
type StateType = {
  userName: string;
};
export default class Exersice01 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      userName: "Mai Van Huy",
    };
  }
  componentDidMount(): void {
    console.log("Mount");
  }
  render() {
    return (
      <div>
        <h2>{this.state.userName}</h2>
      </div>
    );
  }
}
