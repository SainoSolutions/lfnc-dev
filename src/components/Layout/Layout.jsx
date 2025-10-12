import React from 'react';
import Navbar from '../reuseable/Navbar';
import Footer from '../reuseable/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;