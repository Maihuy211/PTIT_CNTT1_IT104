import "../style/Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Malcolm Lockyer</td>
            <td>21/03/1961</td>
            <td>Nam</td>
            <td>New York</td>
            <td>
              <div className="action-buttons">
                <button className="btn btn-edit">Sửa</button>
                <button className="btn btn-delete">Xóa</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria</td>
            <td>11/02/1990</td>
            <td>Nữ</td>
            <td>London</td>
            <td>
              <div className="action-buttons">
                <button className="btn btn-edit">Sửa</button>
                <button className="btn btn-delete">Xóa</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
