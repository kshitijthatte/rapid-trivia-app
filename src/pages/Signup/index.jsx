import { Link } from "react-router-dom";
import "../Login/login.css";

export const Signup = () => {
  return (
    <div className="app-container">
      <div className="authentication-container">
        <div className="card input-group">
          <div className="text-lg text-center">Rapid Trivia - Sign Up</div>
          <div className="name-input">
            <input type="text" className="input" placeholder="First Name" />
            <input type="text" className="input" placeholder="Last Name" />
          </div>
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="New Password" />
          <input type="password" className="input" placeholder="Confirm Password" />
          <div className="btn btn-primary text-center">Sign Up</div>
          <hr className="divider" />
          <Link className="btn outline-primary text-center" to="/login">
            Or Login Now!
          </Link>
        </div>
      </div>
    </div>
  );
};
