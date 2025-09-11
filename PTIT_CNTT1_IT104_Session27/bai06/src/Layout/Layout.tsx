import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="flex justify-center">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
