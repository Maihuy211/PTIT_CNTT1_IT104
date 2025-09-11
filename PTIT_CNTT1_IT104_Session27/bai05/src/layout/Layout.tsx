import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-blue-600 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">My Blog</h1>
          <nav>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `block mb-4 px-3 py-2 rounded ${
                  isActive ? "bg-white text-blue-600 font-semibold" : ""
                }`
              }
            >
              Posts
            </NavLink>
          </nav>
        </div>
        <footer className="text-xs">&copy; 2025 My Blog</footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
}
