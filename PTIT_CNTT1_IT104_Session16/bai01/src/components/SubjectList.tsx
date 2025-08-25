import { Component } from "react";
import "./SubjectList.css";
type StateTypes = {
  subjectList: string[];
};
export default class SubjectList extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      subjectList: ["Toán", "Văn", "Anh", "Hóa", "Sinh"],
    };
  }
  render() {
    return (
      <div className="container">
        <h2>📚 Danh sách môn học</h2>
        <ul>
          {this.state.subjectList.map((subject) => (
            <div className="list">{subject}</div>
          ))}
        </ul>
      </div>
    );
  }
}
