import React from 'react';
import Nav from '../nav';
import Footer from '../footer';

const Layout = ({links, children}) => {
  return (
    <>
      <Nav links={links} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
