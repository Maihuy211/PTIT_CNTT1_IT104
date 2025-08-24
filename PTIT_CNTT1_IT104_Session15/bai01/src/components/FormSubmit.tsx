import { Component } from "react";
import "./FormSubmit.css";

type User = {
  email: string;
};

type StateTypes = {
  user: User;
};
export default class FormSubmit extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        email: " ",
      },
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState({
        user: {
          ...this.state.user,
          [name]: value,
        },
      });
    };
    const handlSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log(this.state.user);
    };
    return (
      <div>
        <h3>Form</h3>
        <form onSubmit={handlSubmit}>
          <div>
            <div>
              <label htmlFor="">Email</label>
            </div>
            <input type="text" name="email" onChange={handleChange} />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
