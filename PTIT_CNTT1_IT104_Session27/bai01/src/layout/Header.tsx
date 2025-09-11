import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 mb-[50px] flex justify-around font-medium">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "underline" : "no-underline")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "underline" : "no-underline")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "underline" : "no-underline")}
      >
        Contact
      </NavLink>
    </nav>
  );
}
