import React from "react";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <menu>Menu</menu>
      <header>Header</header>
      <main>Main</main>
      {/* Hiển thị ra nội dung của các trang con  */}
      <Outlet></Outlet>
    </div>
  );
}
