import { Link } from "react-router-dom";

export const Result = () => {
  return (
    <div className="quiz-container">
      <div className="details">
        <h1>Entertainment Quiz</h1>
        <div className="text-lg">Your Final Score : 80</div>
      </div>
      <div className="question-container result-container">
        <div className="text-xs">Question 1</div>
        <div className="question text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          deserunt ?
        </div>
        <div className="options">
          <div className="option option-correct">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
          <div className="option option-incorrect">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
        </div>
      </div>
      <div className="question-container result-container">
        <div className="text-xs">Question 2</div>
        <div className="question text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          deserunt ?
        </div>
        <div className="options">
          <div className="option">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
          <div className="option option-correct">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
        </div>
      </div>
      <div className="question-container result-container">
        <div className="text-xs">Question 3</div>
        <div className="question text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          deserunt ?
        </div>
        <div className="options">
          <div className="option">Lorem, ipsum.</div>
          <div className="option">Lorem, ipsum.</div>
          <div className="option option-correct">Lorem, ipsum.</div>
          <div className="option option-incorrect">Lorem, ipsum.</div>
        </div>
      </div>
      <div className="actions">
        <Link className="btn btn-primary" to="/quiz">
          Play again
        </Link>
        <Link className="btn btn-primary" to="/categories">
          Start a new quiz
        </Link>
      </div>
    </div>
  );
};
