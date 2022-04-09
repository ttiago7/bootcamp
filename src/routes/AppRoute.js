import React from "react";
import { Routes, Route } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Cv from "../pages/Cv";
import HomePage from "../pages/HomePage";
import Nosotros from "../pages/Nosotros";
const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </>
  );
};

export default AppRoute;
