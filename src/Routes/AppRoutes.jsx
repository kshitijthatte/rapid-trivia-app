import { Route, Routes } from "react-router-dom";
import {
  Categories,
  Homepage,
  Login,
  NotFound,
  Quiz,
  Result,
  Rules,
  Signup,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
