import { CategoryCard } from "../../components";

const categories = [
  {
    title: "Tech",
    imgSrc: "https://source.unsplash.com/FO7JIlwjOtU",
    to: "/rules",
  },
  {
    title: "Cricket",
    imgSrc: "https://source.unsplash.com/IfO43eONJeo",
    to: "/rules",
  },
  {
    title: "India",
    imgSrc: "https://source.unsplash.com/_WuPjE-MPHo",
    to: "/rules",
  },
  {
    title: "Entertainment",
    imgSrc: "https://source.unsplash.com/yubCnXAA3H8",
    to: "/rules",
  },
];

export const Categories = () => {
  return (
    <div className="app-container">
      <h2>Quiz Categories</h2>
      <div className="text-sm">Pick a category to start the quiz</div>
      <div className="grid grid-col-4 categories">
        {categories.map(({ title, imgSrc, to }) => (
          <CategoryCard title={title} imgSrc={imgSrc} to={to} />
        ))}
      </div>
    </div>
  );
};
