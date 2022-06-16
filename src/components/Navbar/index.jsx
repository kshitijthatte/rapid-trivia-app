import { Link } from "react-router-dom";

export const Navbar = ({ drawerDisplay, setDrawerDisplay }) => {
  return (
    <nav className="nav">
      <div className="nav-section">
        <button
          className="material-icons nav-icon header-navigation-icon"
          onClick={() =>
            drawerDisplay === "flex"
              ? setDrawerDisplay("none")
              : setDrawerDisplay("flex")
          }
        >
          menu
        </button>
        <Link className="nav-title" to="/">
          Rapid Trivia
        </Link>
      </div>
      <div className="nav-section nav-section-right">
        <Link className="btn btn-primary btn-sm btn-icon" to="/login">
          <span className="material-icons"> notifications </span>
        </Link>
        <Link className="btn btn-primary btn-sm btn-icon" to="/login">
          <span className="material-icons"> person </span>
          User
        </Link>
      </div>
    </nav>
  );
};
