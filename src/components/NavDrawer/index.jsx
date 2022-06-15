import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

export const NavDrawer = ({ children }) => {
  return (
    <div class="drawer-frame">
      <aside class="drawer">
        <div class="drawer-header">
          <div class="text-md">Hi, User</div>
          <div class="text-sm">jhondoe@tmail.com</div>
        </div>
        <hr class="divider" />
        <div class="drawer-content">
          <nav class="side-nav">
            <Link class="side-nav-item" to="/">
              <span class="material-icons">play_arrow</span>
              Play
            </Link>
            <Link class="side-nav-item" to="/">
              <span class="material-icons">leaderboard</span>
              Leaderboard
            </Link>
            <Link class="side-nav-item" to="/">
              <span class="material-icons">notifications</span>
              Notifications
            </Link>
            <Link class="side-nav-item" to="/">
              <span class="material-icons">contact_support</span>
              Support
            </Link>
          </nav>
        </div>
      </aside>
      <div class="main">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
