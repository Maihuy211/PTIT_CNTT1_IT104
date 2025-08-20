import { Component } from "react";

type Theme = "light" | "dark";
type Language = "english" | "vietnamese";

interface AppState {
  theme: Theme;
  language: Language;
}

export default class ThemeComponent extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      theme: "light",
      language: "english",
    };
  }
  changeTheme = () => {
    this.setState((event) => ({
      theme: event.theme === "light" ? "dark" : "light",
    }));
  };

  // Đổi language khi click
  changeLanguage = () => {
    this.setState((event) => ({
      language: event.language === "english" ? "vietnamese" : "english",
    }));
  };
  render() {
    const { theme, language } = this.state;
    return (
      <body className={`${theme}`}>
        <h2>Nền: {theme}</h2>
        <h2>Ngôn ngữ: {language}</h2>
        <button onClick={this.changeTheme}>Đổi nền</button>
        <button onClick={this.changeLanguage}>Đổi ngôn ngữ</button>
      </body>
    );
  }
}
