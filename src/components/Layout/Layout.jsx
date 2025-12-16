import React from 'react';
import Navbar from '../reuseable/Navbar';
import Footer from '../reuseable/Footer';
import FloatingActionButtons from '../reuseable/FloatingActionButtons';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <FloatingActionButtons />
      <Footer />
    </div>
  );
};

export default Layout;