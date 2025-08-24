import { Component } from "react";
import "./StudentPagination.css";

export default class StudentPagination extends Component {
  render() {
    return (
      <div className="pagination">
        <button>←</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>→</button>
      </div>
    );
  }
}
