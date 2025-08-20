import { Component } from 'react'
import "./Exercises01.css"
type PropTypes = {
  userName?: string
}
type StateTypes = {
    name : string;
}
export default class Exercises01 extends Component<PropTypes,StateTypes> {
  constructor(prop :PropTypes){
    super(prop) ;
    this.state = {
        name: "Mai Van Huy"
    }
  }
  render() {
    return (
      <div>
        <b>Ho va ten : {this.state.name}</b>
      </div>
    )
  }
}
