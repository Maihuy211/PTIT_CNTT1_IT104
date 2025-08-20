import { Component } from "react";
import Children_Comp from "./Children_Comp";

type PropType = {
   name?: string
}

type StateType = {
  name: string;
};

export default class Parent_Comp extends Component<PropType, StateType> {
  constructor(props:PropType ) {
    super(props);
    this.state = {
      name: "Mai Văn Huy", 
    };
  }

  render() {
    return (
      <div>
        <b>Ho va ten ben component cha {this.state.name}</b>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
