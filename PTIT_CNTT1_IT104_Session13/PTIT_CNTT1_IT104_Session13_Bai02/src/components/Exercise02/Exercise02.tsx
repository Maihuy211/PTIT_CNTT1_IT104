import { Component } from "react";
import "./Exercise02.css";
type PropTypes = {
  userName?: string;
};
type StateTypes = {
  id: number;
  name: string;
  date: string;
  address: string;
};
export default class Exercise02 extends Component<PropTypes, StateTypes> {
  constructor(prop: PropTypes) {
    super(prop);
    this.state = {
      id: 1,
      name: "Mai Van Huy",
      date: "25/11/2006",
      address: "Trai dat",
    };
  }
  render() {
    return (
      <div>
        <h3>Thong tin ca nhan</h3>
        <ul>
          <li>id: {this.state.id}</li>
          <li>Ten: {this.state.name}</li>
          <li>Ngay sinh: {this.state.date}</li>
          <li>Dia chi: {this.state.address}</li>
        </ul>
      </div>
    );
  }
}
