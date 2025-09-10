import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const [isAuthenticated] = useState<boolean>(false);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
