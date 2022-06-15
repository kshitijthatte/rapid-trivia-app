import { Link } from "react-router-dom";

export const CategoryCard = ({ title, imgSrc, to }) => {
  return (
    <Link class="card card-overlay" to={to}>
      <img class="card-img category-img" src={imgSrc} alt={title} />
      <div class="overlay-content">
        <div class="card-title">{title}</div>
      </div>
    </Link>
  );
};
