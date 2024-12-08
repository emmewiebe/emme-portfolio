import React from 'react';
import { Outlet } from 'react-router-dom'; // Placeholder for nested page components
import Header from './Header'; // The site's main header
import Footer from './Footer'; // The site's main footer

const Layout = () => (
  <>
    {/* Header appears on all pages */}
    <Header />
    
    <main>
      {/* Outlet is where the specific page content will be rendered */}
      <Outlet />
    </main>
    
    {/* Footer appears on all pages */}
    <Footer />
  </>
);

export default Layout;