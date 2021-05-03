import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
