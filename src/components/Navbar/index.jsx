import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="nav">
      <div class="nav-section">
        <button class="material-icons nav-icon header-navigation-icon">
          menu
        </button>
        <Link class="nav-title" to="/">
          Rapid Trivia
        </Link>
      </div>
      <div class="nav-section nav-section-right">
        <Link class="btn btn-primary btn-sm btn-icon" to="/login">
          <span class="material-icons"> notifications </span>
        </Link>
        <Link class="btn btn-primary btn-sm btn-icon" to="/login">
          <span class="material-icons"> person </span>
          User
        </Link>
      </div>
    </nav>
  );
};
