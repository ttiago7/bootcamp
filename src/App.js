import React from "react";
import HomePage from "./pages/HomePage";
import FormLogin from "./pages/FormLogin";
import FormRegister from "./pages/FormRegister";
import NavbarAdmin from "./pages/NavbarAdmin";
const App = () => {
  return (
    <>
      <NavbarAdmin />
      <HomePage />
      <FormLogin />
      <FormRegister />
    </>
  );
};

export default App;
