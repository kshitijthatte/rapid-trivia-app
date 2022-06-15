import { Link } from "react-router-dom";
import "./login.css";

export const Login = () => {
  return (
    <div className="app-container">
      <div className="authentication-container">
        <div className="card input-group">
          <div className="text-lg text-center">Rapid Trivia - Login</div>
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <Link className="btn btn-primary text-center" to="/user">
            Log In
          </Link>
          <Link className="text-description text-center" to="/">
            Forgot password?
          </Link>
          <hr className="divider" />
          <Link className="btn outline-primary text-center" to="/signup">
            Or Sign Up Now!
          </Link>
        </div>
      </div>
    </div>
  );
};
