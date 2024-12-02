import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials.jsx';
import Logo from '../img/header/logo.png'; // Ensure this path is correct
import MobileNav from './MobileNav.jsx';

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to="/" className="max-w-[200px]">
          <img src={Logo} alt="Company Logo" />
        </Link>
        {/* Navigation: initially hidden - show on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link to="/" className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          <Link to="/about" className="text-[#696c6d] hover:text-primary transition">
            About
          </Link>
          <Link to="/portfolio" className="text-[#696c6d] hover:text-primary transition">
            Portfolio
          </Link>
          <Link to="/contact" className="text-[#696c6d] hover:text-primary transition">
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