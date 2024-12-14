import React, { useState, useEffect, useContext, useRef } from 'react';
import Typed from 'typed.js'; // For the typing effect
import WomanImg from '../img/home/woman.png'; // Main image for the home page
import BackgroundImg from '../img/background.png'; // Background image
import Logo from '../img/logo.png'; // Logo for the loading screen
import { Link } from 'react-router-dom'; // For navigating to other pages
import { motion } from 'framer-motion'; // For animations
import { transition1 } from '../transitions.jsx'; // Custom transition settings
import { CursorContext } from '../context/CursorContext'; // Context for custom cursor effects
import { Helmet } from 'react-helmet'; // For SEO tags and title

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
        typeSpeed: 70,
        backSpeed: 40,
        loop: true,
        cursorChar: '|',
      });

      return () => {
        typed.destroy();
      };
    }
  }, [loading]);

  // Simulates a loading screen for 2.5 seconds before showing the actual home page
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Loading screen
    return (
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <img 
          src={Logo} 
          alt="Emme Drew's logo bouncing during the loading screen" 
          className="w-[500px] h-[500px] animate-bounce" 
        />
      </div>
    );
  }

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>Emme Drew – Brand Strategist, Content Creator & Digital Marketer</title>
        <meta
          name="description"
          content="Welcome to Emme Drew's official website. Discover her expertise in brand strategy, digital marketing, content creation, and design. Explore her latest work and learn how she can help elevate your brand."
        />
        <meta
          name="keywords"
          content="Emme Drew, Brand Strategist, Digital Marketing, Content Creator, Designer, Branding, Marketing Strategy, Creative Services"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Emme Drew – Brand Strategist, Content Creator & Digital Marketer" />
        <meta
          property="og:description"
          content="Explore Emme Drew's world of branding, marketing, and creative design. Discover her services, view her portfolio, and learn how she can help your brand thrive."
        />
        <meta property="og:image" content={WomanImg} />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.section
        initial={{ opacity: 0 }} // Starts invisible
        animate={{ opacity: 1 }} // Fades in
        exit={{ opacity: 0 }} // Fades out when navigating away
        transition={transition1} // Smooth transition timing
        className="section bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
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
              onMouseEnter={mouseEnterHandler}
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

            {/* Image Section */}
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
                  alt="Emme Drew, a blonde-haired woman smiling while wearing black clothes"
                  className="w-auto h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;