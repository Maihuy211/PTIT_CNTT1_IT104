import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="outlet">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "active" : "p")}
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive }) => (isActive ? "active" : "p")}
      >
        Product
      </NavLink>
      <NavLink
        to="/detail"
        className={({ isActive }) => (isActive ? "active" : "p")}
      >
        Detail
      </NavLink>
    </div>
  );
}
