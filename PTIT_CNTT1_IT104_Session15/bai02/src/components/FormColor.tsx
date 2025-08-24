import { Component } from "react";
import "./FormColor.css";
type StateTypes = {
  color: string;
  colorCode: string;
};
export default class FormColor extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "",
      colorCode: "",
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        color: event.target.value,
      });
    };
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      this.setState({
        colorCode: this.state.color,
      });
    };
    return (
      <div>
        <h3>Color: {this.state.colorCode}</h3>
        <h4>Form</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Mau sac</label>
          </div>
          <input type="color" name="" id="" onChange={handleChange} />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
