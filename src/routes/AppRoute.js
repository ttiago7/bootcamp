import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import CreatePost from "../pages/CreatePost";
import Cv from "../pages/Cv";
import HomePage from "../pages/HomePage";
import Nosotros from "../pages/Nosotros";
import FormRegister from "../pages/FormRegister";
import NotFound from "../pages/NotFound";
import FormLogin from "../pages/FormLogin";
const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoute;
