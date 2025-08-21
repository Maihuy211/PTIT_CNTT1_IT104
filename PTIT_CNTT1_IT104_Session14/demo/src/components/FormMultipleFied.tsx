import { Component } from "react";

type User = {
  email: string;
  password: string;
  address: string;
};

type StateTypes = {
  user: User;
};
export default class FormMultipleFied extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        address: "",
      },
    };
  }
  render() {
    // ham lay gia tri trong input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // lay ra name va value
      const { name, value } = event.target;
      this.setState({
        user: {
          ...this.state.user,
          [name]: value,
        },
      });
    };

    const handleSumit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log(this.state.user);
    };
    return (
      <div>
        <h3>ControlledForm</h3>
        <form onSubmit={handleSumit}>
          <div>
            <label htmlFor="">Email</label>
            <input name="email" onChange={handleChange} type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="">Password</label>
            <input name="password" onChange={handleChange} type="password" />
          </div>
          <br />
          <div>
            <label htmlFor="">address</label>
            <input name="address" onChange={handleChange} type="password" />
          </div>
          <br />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
