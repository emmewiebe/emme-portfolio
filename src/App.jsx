import React, { useEffect, useContext } from 'react';
import Header from './components/Header'; // The top navigation/header for the site
import AnimRoutes from './components/AnimRoutes'; // Where all the page routes live
import { BrowserRouter as Router } from 'react-router-dom'; // Handles navigation without page reloads
import { motion } from 'framer-motion'; // For smooth animations
import { CursorContext } from './context/CursorContext'; // Context to handle custom cursor logic
import 'slick-carousel/slick/slick.css'; // Styles for a potential image slider
import 'slick-carousel/slick/slick-theme.css'; // Extra slider styles

const App = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext); // Custom cursor animations/colors

  // This effect makes the background move a bit when scrolling, for a parallax effect.
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // How far down the user scrolled
      document.body.style.backgroundPosition = `center ${-scrollY * 0.5}px`; // Updates the background's position
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);
    // Cleanup when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Wraps the entire app in a router so we can navigate between pages */}
      <Router>
        <Header /> {/* Top nav bar that stays the same across all pages */}
        <AnimRoutes /> {/* Handles all the pages and their animations */}
      </Router>

      {/* Custom cursor effect: follows the user's mouse and changes appearance */}
      <motion.div
        variants={cursorVariants} // Animation options for the cursor
        animate={cursorBG} // Background color animation for the cursor
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full" // Styling for the cursor
      ></motion.div>
    </>
  );
};

export default App;