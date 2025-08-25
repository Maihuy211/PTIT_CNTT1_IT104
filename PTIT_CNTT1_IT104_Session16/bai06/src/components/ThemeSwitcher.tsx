import { Component } from "react";
import "./ThemeSwitcher.css";
type StateTypes = {
  isDarkMode: boolean;
};
export default class ThemeSwitcher extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }
  render() {
    const handleClick = () => {
      this.setState((event) => ({
        isDarkMode: !event.isDarkMode,
      }));
    };
    return (
      <body className={this.state.isDarkMode ? "dark" : "light"}>
        <h3>
          {this.state.isDarkMode
            ? "🌙 Chế độ Tối đang bật"
            : "☀️ Chế độ Sáng đang bật"}
        </h3>
        <button onClick={handleClick}>Chuyển theme</button>
      </body>
    );
  }
}
