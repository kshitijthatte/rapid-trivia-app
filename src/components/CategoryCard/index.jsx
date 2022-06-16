import { Link } from "react-router-dom";

export const CategoryCard = ({ title, imgSrc, to }) => {
  return (
    <Link className="card card-overlay" to={to}>
      <img className="card-img category-img" src={imgSrc} alt={title} />
      <div className="overlay-content">
        <div className="card-title">{title}</div>
      </div>
    </Link>
  );
};
