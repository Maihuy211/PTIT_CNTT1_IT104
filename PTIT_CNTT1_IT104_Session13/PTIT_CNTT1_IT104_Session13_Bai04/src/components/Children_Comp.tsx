import { Component } from "react";

type Props = {
  name: string;
};

export default class Children_Comp extends Component<Props> {
  render() {
    return (
      <div>
        <b>Ho va ten ben component con {this.props.name}</b>
      </div>
    );
  }
}
