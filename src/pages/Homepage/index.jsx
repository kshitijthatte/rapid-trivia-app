import { Link } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  return (
    <div class="app-container">
      <div class="app-header">
        <div class="app-header-contents">
          <div class="text-md">Hi, User</div>
          <div class="page-heading text-lg">Let's Play & Learn</div>
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
        <Link class="card card-overlay" to="/rules">
          <img
            class="card-img category-img"
            src="https://source.unsplash.com/FO7JIlwjOtU"
            alt="Technology"
          />
          <div class="overlay-content">
            <div class="card-title">Tech</div>
          </div>
        </Link>
        <Link class="card card-overlay" to="/rules">
          <img
            class="card-img category-img"
            src="https://source.unsplash.com/IfO43eONJeo"
            alt="Cricket"
          />
          <div class="overlay-content">
            <div class="card-title">Cricket</div>
          </div>
        </Link>
        <Link class="card card-overlay" to="/rules">
          <img
            class="card-img category-img"
            src="https://source.unsplash.com/_WuPjE-MPHo"
            alt="India"
          />
          <div class="overlay-content">
            <div class="card-title">India</div>
          </div>
        </Link>
        <Link class="card card-overlay" to="/categories">
          <img
            class="card-img category-img"
            src="https://source.unsplash.com/pJadQetzTkI"
            alt="Gradient"
          />
          <div class="overlay-content">
            <div class="card-title">
              View All <span class="material-icons"> arrow_right_alt</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
