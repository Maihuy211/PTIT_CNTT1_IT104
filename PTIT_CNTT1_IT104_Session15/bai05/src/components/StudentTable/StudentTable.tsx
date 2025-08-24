import { Component } from "react";
import "./StudentTable.css";
import type { Student } from "../StudentManagement/StudentManagement";

type PropsType = {
  students: Student[];
};

export default class StudentTable extends Component<PropsType> {
  render() {
    const { students } = this.props;
    return (
      <table className="student-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st, index) => (
            <tr key={st.id}>
              <td>{index + 1}</td>
              <td>{st.code}</td>
              <td>{st.name}</td>
              <td>{st.dob}</td>
              <td>{st.email}</td>
              <td>
                {st.status ? (
                  <span className="status-active">Đang hoạt động</span>
                ) : (
                  <span className="status-inactive">Ngừng hoạt động</span>
                )}
              </td>
              <td>
                <button className="btn btn-block">Chặn</button>
                <button className="btn btn-edit">Sửa</button>
                <button className="btn btn-delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
