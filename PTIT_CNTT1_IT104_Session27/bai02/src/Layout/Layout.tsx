import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      {/* Header luôn hiển thị */}
      <Header />

      {/* Nội dung từng page */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
