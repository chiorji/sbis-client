import React, { useState, useLayoutEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import AppBar from '@material-ui/core/AppBar';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const NavBar = ({ links }) => {
  const [view, setView] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const { mobileView, drawerOpen } = view;

  const toggleDrawer = useCallback(() => {
    setView(prevView => ({
      ...prevView, drawerOpen: !drawerOpen
    }));
  }, [drawerOpen]);

  useLayoutEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setView(prevView => ({ ...prevView, mobileView: true }))
        : setView(prevView => ({ ...prevView, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener('resize', setResponsiveness);

    return () => window.removeEventListener('resize', setResponsiveness);
  }, [mobileView]);

  return (
    <AppBar position="sticky" elevation={0}>
      <header>
        <LoadingBar />
      </header>
      {mobileView ? <MobileMenu
        name='Success Builders'
        drawerOpen={drawerOpen}
        closeDrawer={toggleDrawer}
        links={links}
      /> : <DesktopMenu
        name="Success Builders Int'l Schools"
        links={links}
      />}
    </AppBar>
  );
};

const mapState = ({ staff }) => ({
  isLoggedIn: staff.isLoggedIn
});

export default connect(mapState)(NavBar);
