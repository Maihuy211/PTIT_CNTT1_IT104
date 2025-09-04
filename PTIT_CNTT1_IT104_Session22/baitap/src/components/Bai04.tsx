import { Dropdown, Button, message, Space } from "antd";
import type { MenuProps } from "antd";

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info(`Click on menu item: ${e.key}`);
  console.log("click", e);
};

const items: MenuProps["items"] = [
  { key: "1", label: "Cài đặt" },
  { key: "2", label: "Đổi mật khẩu" },
  { key: "3", label: "Đăng xuất" },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function Bai04() {
  return (
    <div>
      Bài 04:
      <div>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>Nguyễn Văn Nam</Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
}
