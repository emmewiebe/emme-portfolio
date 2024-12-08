import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // For routing between pages
import { AnimatePresence } from 'framer-motion'; // For smooth page transitions

// Importing all the pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Project1 from '../pages/project1';

// Importing the layout that wraps all pages
import Layout from './Layout';

const AnimRoutes = () => {
  const location = useLocation(); // Keeps track of the current URL/path

  return (
    <AnimatePresence initial={true} mode="wait">
      {/* The Routes component defines all the paths */}
      <Routes key={location.pathname} location={location}>
        {/* Wrap all pages in the Layout */}
        <Route path="/" element={<Layout />}>
          {/* Each page corresponds to a different path */}
          <Route index element={<Home />} /> {/* Homepage */}
          <Route path="about" element={<About />} /> {/* About page */}
          <Route path="portfolio" element={<Portfolio />} /> {/* Portfolio page */}
          <Route path="contact" element={<Contact />} /> {/* Contact page */}
          <Route path="project-1" element={<Project1 />} /> {/* Specific project page */}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;