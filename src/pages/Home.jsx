import React, { useState, useEffect, useContext, useRef } from 'react';
import Typed from 'typed.js'; // For the typing effect
import WomanImg from '../img/home/woman.png'; // Main image for the home page
import BackgroundImg from '../img/background.png'; // Background image
import Logo from '../img/logo.png'; // Logo for the loading screen
import { Link } from 'react-router-dom'; // For navigating to other pages
import { motion } from 'framer-motion'; // For animations
import { transition1 } from '../transitions.jsx'; // Custom transition settings
import { CursorContext } from '../context/CursorContext'; // Context for custom cursor effects

const Home = () => {
  const [loading, setLoading] = useState(true); // Handles whether the loading screen is showing
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext); // Functions to handle custom cursor hover effects
  const typedElement = useRef(null); // Ref for the element where Typed.js will work its magic

  // Sets up the typing effect (Typed.js) after the loading screen disappears
  useEffect(() => {
    if (!loading && typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          "I'm a Brand Strategist",
          "I'm a Content Creator",
          "I'm a Digital Marketer",
          "I'm a Designer",
        ], // Rotates through these strings
        typeSpeed: 70, // Speed for typing letters
        backSpeed: 40, // Speed for deleting letters
        loop: true, // Keeps looping through the strings
        cursorChar: '|', // The blinking cursor
      });

      // Clean up Typed.js when this effect runs again or when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, [loading]);

  // Simulates a loading screen for 2.5 seconds before showing the actual home page
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // After 2.5 seconds, set loading to false
    return () => clearTimeout(timer); // Cleanup if the component unmounts before the timer finishes
  }, []);

  if (loading) {
    // This is what shows during the "loading" state
    return (
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImg})`, // Use the background image here
        }}
      >
        <img src={Logo} alt="Logo" className="w-[500px] h-[500px] animate-bounce" /> {/* Bouncing logo */}
      </div>
    );
  }

  // The actual content of the home page
  return (
    <motion.section
      initial={{ opacity: 0 }} // Starts invisible
      animate={{ opacity: 1 }} // Fades in
      exit={{ opacity: 0 }} // Fades out when navigating away
      transition={transition1} // Smooth transition timing
      className="section bg-cover bg-center"
      style={{
        backgroundImage: `url(${BackgroundImg})`, // Background image for the home page
      }}
    >
      <div className="container mx-auto h-full relative">
        {/* Wrapper for the main text and image */}
        <div className="flex flex-col justify-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }} // Starts slightly above and invisible
            animate={{ opacity: 1, y: 0 }} // Slides into place
            exit={{ opacity: 0, y: '-50%' }} // Slides back up when leaving
            transition={transition1} // Smooth timing for the animation
            onMouseEnter={mouseEnterHandler} // Trigger custom cursor effect
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col 
            justify-center items-center lg:items-start"
          >
            <div className="text-center lg:text-left lg:pl-[50px]">
              <h1 className="h1 font-hemis text-[#345363]">Emme Drew</h1> {/* Name/title */}
              {/* Typed.js Typing Effect */}
              <p
                className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 text-[#345363] inline-block font-primary"
                ref={typedElement} // This is where Typed.js injects the text
              ></p>
              {/* Button to navigate to the Portfolio page */}
              <Link
                to={'/portfolio'}
                className="btn mb-[30px]"
                style={{
                  backgroundColor: '#79b4af', // Custom button color
                  color: '#345363',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                My Latest Work!
              </Link>
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="flex justify-end max-h-96 lg:max-h-max relative">
            <motion.div
              initial={{ scale: 0.9 }} // Start slightly smaller
              animate={{ scale: 1 }} // Grow to full size
              exit={{ scale: 0.9 }} // Shrink when leaving
              transition={transition1} // Smooth timing
              onMouseEnter={mouseEnterHandler} // Trigger custom cursor hover effect
              onMouseLeave={mouseLeaveHandler}
              className="relative lg:-right-40 overflow-hidden"
              style={{ marginTop: '-200px' }} // Adjust positioning
            >
              <motion.img
                whileHover={{ scale: 1.1 }} // Slight zoom-in on hover
                transition={transition1}
                src={WomanImg} // Image source
                alt="Portrait" // Alt text for accessibility
                className="w-auto h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;