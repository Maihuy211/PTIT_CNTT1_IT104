import { Alert, Space } from "antd";

export default function Bai05() {
  return (
    <div>
      Bài 05:
      <div>
        <Space direction="vertical" style={{ width: 400 }}>
          <Alert message="Thêm tài khoản thành công." type="success" closable />
          <Alert message="Thêm mới tài khoản thất bại." type="error" closable />
          <Alert message="Tên không được để trống." type="warning" closable />
        </Space>
      </div>
    </div>
  );
}
