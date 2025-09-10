import { Link, Outlet } from "react-router-dom";

export default function Teams() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/teams">Teamindex</Link>
        <Link to="/teams/1">Team1</Link>
        <Link to="/teams/2">team2</Link>
      </nav>
      <Outlet />
    </>
  );
}
