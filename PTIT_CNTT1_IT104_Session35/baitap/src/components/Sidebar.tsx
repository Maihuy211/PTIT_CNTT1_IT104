import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  BarChartOutlined,
  FileTextOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import type { RootState } from "../stores";
import { useDispatch, useSelector } from "react-redux";
import { togglewidth } from "../slices/sidebarSices";

export default function Sidebar() {
  const result = useSelector((state: RootState) => state.with.value);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(togglewidth());
  };

  return (
    <div>
      Bai 05:
      <div
        className="bg-[#05122a] text-white flex flex-col transition-all duration-300"
        style={{
          width: result ? "224px" : "50px",
          height: result ? "280px" : "230px",
        }}
      >
        <nav className="flex-1 mt-2">
          <ul className="space-y-1">
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
              <DashboardOutlined />
              {result && <span>Bảng điều khiển</span>}
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
              <UserOutlined />
              {result && <span>Tài khoản</span>}
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
              <DollarOutlined />
              {result && <span>Tài sản</span>}
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
              <BarChartOutlined />
              {result && <span>Thống kê</span>}
            </li>
            <li className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer">
              <FileTextOutlined />
              {result && <span>Tài liệu</span>}
            </li>
            <li
              className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer"
              onClick={handleChange}
            >
              <LeftOutlined
                className={`transition-transform duration-300 ${
                  !result ? "rotate-180" : ""
                }`}
              />
              {result && <span>Thu gọn</span>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
