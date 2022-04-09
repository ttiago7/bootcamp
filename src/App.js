import NavbarAdmin from "./pages/NavbarAdmin";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import Navbar from "./pages/Navbar";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        {/* <NavbarAdmin /> */}
        <AppRoute />
      </Router>
    </>
  );
};

export default App;
