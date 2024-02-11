import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PageNotFound from "../components/PageNotFound";
import ShowStories from "../components/ShowStories"; // Ensure this component exists
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:type" element={<ShowStories />} />{" "}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
