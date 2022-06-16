import "./styles.css";
import { Homepage, Categories, Login, Signup, Rules, Quiz, Result } from "./pages";
import { NavDrawer } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <NavDrawer>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </NavDrawer>
  );
}

export default App;
