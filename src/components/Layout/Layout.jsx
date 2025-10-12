import React from 'react';
import Navbar from '../reuseable/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;