import React, { useState, useEffect, useContext, useRef } from 'react';
import Typed from 'typed.js'; // Import Typed.js
import WomanImg from '../img/home/woman.png';
import BackgroundImg from '../img/background.png';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions.jsx';
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const typedElement = useRef(null); // Reference for the Typed.js element

  // Initialize Typed.js effect
  useEffect(() => {
    if (!loading && typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          "I'm a Brand Strategist",
          "I'm a Content Creator",
          "I'm a Digital Marketer",
          "I'm a Designer",
        ],
        typeSpeed: 70, // Typing speed
        backSpeed: 40, // Backspacing speed
        loop: true, // Repeat the typing loop
        cursorChar: '|', // Customize cursor character
      });

      return () => {
        typed.destroy(); // Cleanup Typed.js instance
      };
    }
  }, [loading]); // Wait for loading state to resolve before initializing Typed.js

  // Simulate loading display before home page loads
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show loading screen with logo
    return (
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <img src={Logo} alt="Logo" className="w-[500px] h-[500px] animate-bounce" />
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section bg-cover bg-center"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
      }}
    >
      <div className="container mx-auto h-full relative">
        {/* Text & Image Wrapper */}
        <div className="flex flex-col justify-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col 
            justify-center items-center lg:items-start"
          >
            <div className="text-center lg:text-left lg:pl-[50px]">
              <h1 className="h1 font-hemis text-[#345363]">Emme Drew</h1>
              {/* Typed.js Effect */}
              <p
                className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 text-[#345363] inline-block font-primary"
                ref={typedElement} // Attach Typed.js to this element
              ></p>
              {/* Updated Button */}
              <Link
                to={'/portfolio'}
                className="btn mb-[30px]"
                style={{
                  backgroundColor: '#79b4af', 
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

          {/* Image */}
          <div className="flex justify-end max-h-96 lg:max-h-max relative">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="relative lg:-right-40 overflow-hidden"
              style={{ marginTop: '-200px' }} 
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt="Portrait"
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