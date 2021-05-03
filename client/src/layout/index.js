import React from 'react';
import Nav from '../components/Nav';
import CopyRight from '../components/CopyRight';

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      {children}
      <CopyRight />
    </>
  );
};

export default Layout;
