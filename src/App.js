import "./styles.css";
import { NavDrawer } from "./components";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <NavDrawer>
      <AppRoutes />
    </NavDrawer>
  );
}

export default App;
