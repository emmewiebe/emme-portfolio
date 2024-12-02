import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Project1 from '../pages/Project1';
import Project2 from '../pages/Project2';
import Project3 from '../pages/Project3';
import Project4 from '../pages/Project4';

const AnimRoutes = () => {
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project-1" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
        <Route path="/project-3" element={<Project3 />} />
        <Route path="/project-4" element={<Project4 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;