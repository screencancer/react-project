import { Outlet, Link } from "react-router-dom";
import "./css/nav.css";

function Navigation() {
  return (
    <div className="nav-bar-selector" id="navbar">
      <nav>
        <ul>
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
