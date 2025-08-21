import { Component } from "react";
import "./GenderForm.css";
type StateType = {
  gender: string;
  submittedGender: string;
};

export default class GenderForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submittedGender: "",
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        gender: event.target.value,
      });
    };

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      this.setState({
        submittedGender: this.state.gender,
      });
    };

    return (
      <div>
        <h3>Giới tính: {this.state.submittedGender}</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={this.state.gender === "Nam"}
                onChange={handleChange}
              />
              Nam
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={this.state.gender === "Nữ"}
                onChange={handleChange}
              />
              Nữ
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={this.state.gender === "Khác"}
                onChange={handleChange}
              />
              Khác
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
