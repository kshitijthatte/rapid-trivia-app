import { CategoryCard } from "../../components";
import "./homepage.css";

export const Homepage = () => {
  return (
    <div class="app-container">
      <div class="app-header">
        <div class="app-header-contents">
          <div class="text-md">Hi, User</div>
          <div class="page-heading text-lg">Let's Play &amp; Learn</div>
          <div class="search-bar input-group">
            <input
              type="text"
              class="input search-bar"
              placeholder="Search quizes or categories"
            />
            <span class="material-icons">search</span>
          </div>
          <div class="btn btn-primary btn-icon">
            Start a random quiz
            <span class="material-icons">arrow_right_alt</span>
          </div>
        </div>
      </div>
      <h2>Popular Categories</h2>
      <div class="grid grid-col-4 categories">
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
            <span class="material-icons"> arrow_right_alt</span>,
          ]}
          imgSrc={"https://source.unsplash.com/pJadQetzTkI"}
          to={"/categories"}
        />
      </div>
    </div>
  );
};
