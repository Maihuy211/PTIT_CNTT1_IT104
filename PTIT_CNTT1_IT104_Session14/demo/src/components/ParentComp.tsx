import { Component } from "react";
import ChildrentComp from "./ChildrentComp";

type StateTypes = {
  isShow: boolean;
};
export default class ParentComp extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  render() {
    const handlechage = () => {
      this.setState({
        isShow: true,
      });
    };
    return (
      <div>
        <h2>ParentComp</h2>
        <button onClick={handlechage}>Show</button>
        {!this.state.isShow ? <ChildrentComp></ChildrentComp> : <div></div>}
      </div>
    );
  }
}
