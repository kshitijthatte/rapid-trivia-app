import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

export const NavDrawer = ({ children }) => {
  return (
    <div className="drawer-frame">
      <aside className="drawer">
        <div className="drawer-header">
          <div className="text-md">Hi, User</div>
          <div className="text-sm">jhondoe@tmail.com</div>
        </div>
        <hr className="divider" />
        <div className="drawer-content">
          <nav className="side-nav">
            <Link className="side-nav-item" to="/">
              <span className="material-icons">play_arrow</span>
              Play
            </Link>
            <Link className="side-nav-item" to="/">
              <span className="material-icons">leaderboard</span>
              Leaderboard
            </Link>
            <Link className="side-nav-item" to="/">
              <span className="material-icons">notifications</span>
              Notifications
            </Link>
            <Link className="side-nav-item" to="/">
              <span className="material-icons">contact_support</span>
              Support
            </Link>
          </nav>
        </div>
      </aside>
      <div className="main">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
