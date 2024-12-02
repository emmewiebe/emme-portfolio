import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials.jsx';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav.jsx';

const Header = () => {
  return (
    <header className="fixed w-full px-[15px] lg:px-[50px] z-50 h-[80px] lg:h-[100px] flex items-center bg-white shadow-md">
      <div className="flex flex-row items-center w-full justify-between">
        {/* Logo */}
        <Link to="/" className="max-w-[100px]">
          <img
            src={Logo}
            alt="Company Logo"
            className="w-[80px] lg:w-[100px]" // Smaller logo size
          />
        </Link>

        {/* Navigation: Hidden on mobile, visible on desktop */}
        <nav className="hidden lg:flex gap-x-12 font-primary text-lg">
          <Link
            to="/"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-[#333] hover:text-primary transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Socials */}
      <Socials />

      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;