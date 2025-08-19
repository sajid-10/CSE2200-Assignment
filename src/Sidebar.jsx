import { FaBars, FaHome, FaTractor } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './App.css'

const routes = [
  {
    path: "/",
    name: "Profile",
    icon: <FaHome />
  },
  {
    path: "/articales",
    name: "Articles",
    icon: <FaTractor />
  }
];

function Sidebar({ children }) {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
          <div className="bars"><FaBars /></div>
        </div>

        {/* Navigation Links */}
        <div className="routes">
          {routes.map((item) => (
            <NavLink to={item.path} key={item.name} className="nav-link">
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="content">{children}</main>
    </div>
  );
}

export default Sidebar;
