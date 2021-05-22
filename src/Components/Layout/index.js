import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ links, children }) => {
  return (
    <>
      <Nav links={links} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
