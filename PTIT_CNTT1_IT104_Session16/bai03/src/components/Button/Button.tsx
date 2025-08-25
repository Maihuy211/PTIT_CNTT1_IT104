import { Component } from "react";
import "./Button.css";

type PropsType = {
  label: string;
  type:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "light"
    | "dark"
    | "link";
};

export default class Button extends Component<PropsType> {
  render() {
    const { label, type } = this.props;
    return <button className={`btn btn-${type}`}>{label}</button>;
  }
}
