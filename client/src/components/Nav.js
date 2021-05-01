import React, {useState, useLayoutEffect, useCallback} from 'react';
import AppBar from '@material-ui/core/AppBar';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import {links} from '../request/links';

const NavBar = () => {
  const [view, setView] = useState({
    mobileView: false,
    drawerOpen: false
  });

  const {mobileView, drawerOpen} = view;

  const toggleDrawer = useCallback(() => {
    setView(prevView => ({
      ...prevView, drawerOpen: !drawerOpen
    }));
  }, [drawerOpen]);

  useLayoutEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setView(prevView => ({...prevView, mobileView: true}))
        : setView(prevView => ({...prevView, mobileView: false}));
    };

    setResponsiveness();
    window.addEventListener('resize', setResponsiveness);

    return () => window.removeEventListener('resize', setResponsiveness);
  }, [mobileView]);

  return (
    <AppBar position="sticky">
      {mobileView ? <MobileMenu
        name="S.B.I.S"
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

export default NavBar;
