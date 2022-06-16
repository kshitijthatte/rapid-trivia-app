import { Link } from "react-router-dom";

export const Rules = () => {
  return (
    <div className="app-container">
      <h2 className="margin-l-1">Quiz Rules</h2>
      <ul className="list-group">
        <li className="list-item">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt eum sit
          incidunt, deserunt itaque accusamus?
        </li>
        <li className="list-item">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
          molestiae illum fugiat aliquid sit.
        </li>
        <li className="list-item">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          ab expedita! Aliquid maiores inventore vitae saepe nostrum
          consequuntur ipsum.
        </li>
        <li className="list-item">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In corporis,
          molestias sint architecto excepturi sunt? Nobis, at. Cupiditate.
        </li>
        <li className="list-item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ea a id?
        </li>
      </ul>
      <Link className="btn btn-primary margin-l-1" to="/quiz">
        Start Quiz!
      </Link>
    </div>
  );
};
