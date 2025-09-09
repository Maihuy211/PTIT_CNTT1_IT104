import { Link, useLocation, Navigate } from "react-router-dom";

export default function CustomLink() {
  const location = useLocation();

  return location.pathname === "/home-page" ? (
    <div>
      <Link to="/home-page">Đi tới HomePage</Link>
    </div>
  ) : (
    <Navigate to="/not-found" replace />
  );
}
