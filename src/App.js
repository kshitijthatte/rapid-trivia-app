import "./styles.css";
import {Homepage, Categories} from "./pages";
import { NavDrawer } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <NavDrawer>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </NavDrawer>
  );
}

export default App;
