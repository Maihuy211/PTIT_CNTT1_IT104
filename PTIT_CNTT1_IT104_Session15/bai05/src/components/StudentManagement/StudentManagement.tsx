import { Component } from "react";
import "./StudentManagement.css";
import StudentToolbar from "../StudentToolbar/StudentToolbar";
import StudentTable from "../StudentTable/StudentTable";
import StudentPagination from "../StudentPagination/StudentPagination";

export type Student = {
  id: number;
  code: string;
  name: string;
  dob: string;
  email: string;
  status: boolean;
};

type StateType = {
  students: Student[];
};

export default class StudentManagement extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          code: "SV001",
          name: "Nguyễn Văn A",
          dob: "21/12/2023",
          email: "nva@gmail.com",
          status: true,
        },
        {
          id: 2,
          code: "SV002",
          name: "Nguyễn Thị B",
          dob: "21/11/2022",
          email: "ntb@gmail.com",
          status: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="student-management">
        <h2>Quản lý sinh viên</h2>
        <StudentToolbar></StudentToolbar>
        <StudentTable students={this.state.students}></StudentTable>
        <StudentPagination></StudentPagination>
      </div>
    );
  }
}
