import React from 'react';
import Navbar from '../reuseable/Navbar';
import Footer from '../reuseable/Footer';
import Ministries from '../../pages/Ministries/Ministries';
import Services from '../../pages/Services/Services';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Ministries />
      <Services/>
      <Footer />
    </div>
  );
};

export default Layout;