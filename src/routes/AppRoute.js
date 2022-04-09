import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import CreatePost from "../pages/CreatePost";
import Cv from "../pages/Cv";
import HomePage from "../pages/HomePage";
import Nosotros from "../pages/Nosotros";
import FormLogin from "../pages/FormRegister";
import FormRegister from "../pages/FormLogin";
const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </>
  );
};

export default AppRoute;
