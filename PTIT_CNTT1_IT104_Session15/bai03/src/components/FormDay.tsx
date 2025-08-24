import { Component } from "react";
import "./FromDay.css"
type StateTypes = {
  day: string;
  dayText: string;
};
export default class FormDay extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      day: "",
      dayText: "",
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        day: event.target.value,
      });
    };
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      this.setState({
        dayText: this.state.day,
      });
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Ngay sinh : {this.state.dayText} </label>
          </div>
          <input type="date" name="day" id="" onChange={handleChange} />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
