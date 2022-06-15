import "./styles.css";
import Homepage from "./pages/Homepage";
import { NavDrawer } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <NavDrawer>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </NavDrawer>
  );
}

export default App;
