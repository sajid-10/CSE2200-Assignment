import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { sidebarData } from "./sidebar-data";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="header">
          <button className="toggleButton" onClick={toggleSidebar}>
            <div className={`arrow ${isOpen ? "left" : "right"}`}></div>
          </button>
          <div className="logo">
            <h2>{isOpen ? "My App" : ""}</h2>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            {sidebarData?.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  {item.icon}
                  {isOpen ? item.name : ""}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content (Routes will show here) */}
      <div className="flex-1 p-6 bg-gray-100">{children}</div>
    </div>
  );
}

export default Sidebar;
