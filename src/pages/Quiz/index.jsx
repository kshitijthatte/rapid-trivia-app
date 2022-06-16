import { Link } from "react-router-dom";
import "./quiz.css";

export const Quiz = () => {
  return (
    <div className="quiz-container">
      <div className="details">
        <h1>Entertainment Quiz</h1>
        <div>Current Score : 10</div>
      </div>
      <div className="question-container">
        <div className="text-xs">Question 1</div>
        <div className="question text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          deserunt ?
        </div>
        <div className="options">
          <div className="option">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
        </div>
      </div>
      <div className="actions">
        <Link className="btn btn-primary" to="/rules">
          Read Rules
        </Link>
        <Link className="btn btn-primary" to="/result">
          Next Question
        </Link>
      </div>
    </div>
  );
};
