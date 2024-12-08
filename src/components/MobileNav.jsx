import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'; // Icon for closing the menu
import { CgMenuRight } from 'react-icons/cg'; // Icon for opening the menu
import { Link } from 'react-router-dom'; // For navigation links
import { motion } from 'framer-motion'; // For animations

// Animation variants for the menu
const menuVariants = {
  hidden: {
    x: '100%', // Starts off-screen to the right
  },
  show: {
    x: 0, // Slides into view
    transition: {
      ease: [0.6, 0.1, -0.05, 0.9], // Smooth easing for the animation
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false); // Tracks whether the menu is open or closed

  return (
    <nav className="text-primary xl:hidden"> {/* Only visible on small screens */}
      {/* Open Menu Button */}
      <div
        className="text-3xl cursor-pointer"
        onClick={() => setOpenMenu(true)} // Opens the menu
      >
        <CgMenuRight /> {/* "Hamburger" menu icon */}
      </div>

      {/* Sliding Menu */}
      <motion.div
        variants={menuVariants} // Uses the animation variants defined above
        initial="hidden" // Menu starts off-screen
        animate={openMenu ? 'show' : ''} // Show or hide the menu based on state
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20" // Styles for the sliding menu
      >
        {/* Close Menu Button */}
        <div
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
          onClick={() => setOpenMenu(false)} // Closes the menu
        >
          <IoMdClose /> {/* Close icon */}
        </div>

        {/* Navigation Links */}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          <li>
            <Link to="/" onClick={() => setOpenMenu(false)}> {/* Close menu when a link is clicked */}
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpenMenu(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={() => setOpenMenu(false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpenMenu(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;