import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import Socials from './Socials.jsx'; // Social media icons
import Logo from '../img/header/logo.png'; // Logo for the header
import MobileNav from './MobileNav.jsx'; // Mobile navigation menu

const Header = () => {
  return (
    <header className="fixed w-full px-[15px] lg:px-[50px] z-50 h-[80px] lg:h-[100px] flex items-center bg-white shadow-md">
      <div className="flex flex-row items-center w-full justify-between">
        {/* Logo: Links back to the homepage */}
        <Link to="/" className="max-w-[100px]">
          <img
            src={Logo} // Logo image source
            alt="Company Logo" // Alt text for accessibility
            className="w-[80px] lg:w-[100px]" // Logo size adjustments for different screen sizes
          />
        </Link>

        {/* Desktop Navigation: Hidden on mobile */}
        <nav className="hidden lg:flex gap-x-12 font-primary text-lg">
          {/* Navigation Links */}
          <Link
            to="/"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            Home {/* Link to the homepage */}
          </Link>
          <Link
            to="/about"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            About {/* Link to the About page */}
          </Link>
          <Link
            to="/portfolio"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            Portfolio {/* Link to the Portfolio page */}
          </Link>
          <Link
            to="/contact"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            Contact {/* Link to the Contact page */}
          </Link>
        </nav>
      </div>

      {/* Social Media Icons */}
      <Socials />

      {/* Mobile Navigation: Visible only on smaller screens */}
      <MobileNav />
    </header>
  );
};

export default Header;