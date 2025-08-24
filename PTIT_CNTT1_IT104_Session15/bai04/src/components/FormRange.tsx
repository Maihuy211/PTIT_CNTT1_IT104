import { Component } from "react";
import "./FromRange.css";
type StateTypes = {
  range: string;
  rangeText: string;
};
export default class FormRange extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      range: "",
      rangeText: "",
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        range: event.target.value,
      });
    };
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      this.setState({
        rangeText: this.state.range,
      });
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">
              Tien do hoan thanh : {this.state.rangeText} %
            </label>
          </div>
          <input type="range" name="range" id="" onChange={handleChange} />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
