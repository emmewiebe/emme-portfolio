import React, { useState, useEffect, useContext } from 'react';
import WomanImg from '../img/home/woman.png';
import BackgroundImg from '../img/background.png'; // Background image
import Logo from '../img/logo.png'; // Logo
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions.jsx';
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const [loading, setLoading] = useState(true); // Loading state
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  // Handle parallax scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.body.style.backgroundPosition = `center ${-scrollY * 0.5}px`; // Parallax effect
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show loading screen
    return (
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <img src={Logo} alt="Logo" className="w-[150px] h-[150px] animate-bounce" /> {/* Larger logo */}
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
        backgroundImage: `url(${BackgroundImg})`, // Keep background consistent
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
           <h1 className="h1 font-hemis text-[#345363]">Emme Drew</h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 text-[#79b4af]">
              Vancouver, Canada
            </p>
            <Link to={'/contact'} className="btn mb-[30px]">
              Hire Me
            </Link>
          </motion.div>
          {/* Image */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={transition1}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={WomanImg}
                alt="Portrait of a woman"
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