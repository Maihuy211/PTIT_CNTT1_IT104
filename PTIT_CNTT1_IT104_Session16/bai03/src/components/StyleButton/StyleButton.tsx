import { Component } from "react";
import Button from "../Button/button";
import "./StyleButton.css";

export default class StyleButton extends Component {
  render() {
    return (
      <div className="button-container">
        <Button label="Primary" type="primary" />
        <Button label="Secondary" type="secondary" />
        <Button label="Success" type="success" />
        <Button label="Warning" type="warning" />
        <Button label="Danger" type="danger" />
        <Button label="Info" type="info" />
        <Button label="Light" type="light" />
        <Button label="Dark" type="dark" />
        <Button label="Link" type="link" />
      </div>
    );
  }
}
