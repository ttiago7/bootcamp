import React from "react";
// import HomePage from "./pages/HomePage";
// import FormLogin from "./pages/FormLogin";
// import FormRegister from "./pages/FormRegister";
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
      {/* <NavbarAdmin />
      <HomePage />
      <FormLogin />
      <FormRegister /> */}
    </>
  );
};

export default App;
