import { Component } from "react";
import "./StudentToolbar.css";

export default class StudentToolbar extends Component {
  render() {
    return (
      <div className="student-header">
        <button className="btn-add">Thêm mới sinh viên</button>
        <div>
          <select className="sort-select">
            <option>Sắp xếp theo tuổi</option>
            <option>Tăng dần</option>
            <option>Giảm dần</option>
          </select>
          <input
            type="text"
            className="search-box"
            placeholder="Tìm kiếm từ khóa theo tên hoặc email"
          />
        </div>
      </div>
    );
  }
}
