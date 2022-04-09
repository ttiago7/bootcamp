import NavbarAdmin from "./pages/NavbarAdmin";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
const App = () => {
  return (
    <>
      <Router>
        <NavbarAdmin />
        <AppRoute />
      </Router>
    </>
  );
};

export default App;
