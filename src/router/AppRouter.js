import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories'; // Ensure this component exists

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:type" element={<ShowStories />} /> {/* Use 'element' prop in v6 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
