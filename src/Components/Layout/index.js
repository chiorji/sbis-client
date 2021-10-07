import React from 'react';
import Divider from '@material-ui/core/Divider';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ links, children }) => {
  return (
    <>
      <Nav links={links} />
      {children}
      <Divider />
      <Footer />
    </>
  );
};

export default Layout;
