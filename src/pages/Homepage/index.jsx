import { CategoryCard } from "../../components";
import "./homepage.css";

export const Homepage = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <div className="app-header-contents">
          <div className="text-md">Hi, User</div>
          <div className="page-heading text-lg">Let's Play &amp; Learn</div>
          <div className="search-bar input-group">
            <input
              type="text"
              className="input search-bar"
              placeholder="Search quizes or categories"
            />
            <span className="material-icons">search</span>
          </div>
          <div className="btn btn-primary btn-icon">
            Start a random quiz
            <span className="material-icons">arrow_right_alt</span>
          </div>
        </div>
      </div>
      <h2>Popular Categories</h2>
      <div className="grid grid-col-4 categories">
        <CategoryCard
          title={"Tech"}
          imgSrc={"https://source.unsplash.com/FO7JIlwjOtU"}
          to={"/rules"}
        />
        <CategoryCard
          title={"Cricket"}
          imgSrc={"https://source.unsplash.com/IfO43eONJeo"}
          to={"/rules"}
        />
        <CategoryCard
          title={"India"}
          imgSrc={"https://source.unsplash.com/_WuPjE-MPHo"}
          to={"/rules"}
        />
        <CategoryCard
          title={[
            "View All",
            <span className="material-icons"> arrow_right_alt</span>,
          ]}
          imgSrc={"https://source.unsplash.com/pJadQetzTkI"}
          to={"/categories"}
        />
      </div>
    </div>
  );
};
