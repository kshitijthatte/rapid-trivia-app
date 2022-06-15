import "./styles.css";
import { Homepage, Categories, Login, Signup } from "./pages";
import { NavDrawer } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <NavDrawer>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </NavDrawer>
  );
}

export default App;
