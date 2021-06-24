import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import SingleColor from "../pages/SingleColor/SingleColor";
import FavoritesPage from "./../pages/FavoritesPage/FavoritesPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="single/:id" element={<SingleColor />} />
      <Route path="favorites" element={<FavoritesPage />} />
    </Routes>
  );
};

export default Router;
