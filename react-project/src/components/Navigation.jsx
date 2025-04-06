import { Outlet, Link } from "react-router-dom";
import "./css/nav.css";
import { useState } from "react";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen)
    }
  return (
    <div className="nav-bar-selector" id="navbar">
      <nav>
        <div id="toggle" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ul className={menuOpen ? "" : "hide-small"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plans">Plans</Link>
          </li>
          <li>
            <Link to="/recent">Recent</Link>
          </li>
          <li>
            <Link to="/Account">Account</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
