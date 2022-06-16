import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="app-container">
      <h2 className="margin-l-1">Lost your way?</h2>
      <p className="margin-l-1">Sorry, we can't find that page.</p>
      <Link className="btn btn-sm btn-primary margin-l-1" to="/">
        Home
      </Link>
    </div>
  );
};
