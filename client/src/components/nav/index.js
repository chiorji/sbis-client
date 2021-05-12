import React, {useState, useLayoutEffect, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import AppBar from '@material-ui/core/AppBar';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const NavBar = ({links, topName, isLoggedIn}) => {
  const [view, setView] = useState({
    mobileView: false,
    drawerOpen: false,
    name:       'S.B.I.S'
  });

  const {mobileView, drawerOpen, name} = view;

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

  useEffect(() => {
    if (isLoggedIn) {
      setView(prevView => ({...prevView, name: 'Admin'}));
    } else {
      setView(prevView => ({...prevView, name: 'S.B.I.S'}));
    }
  }, [isLoggedIn]);

  return (
    <AppBar position="static">
      <header>
        <LoadingBar />
      </header>
      {mobileView ? <MobileMenu
        name={name}
        drawerOpen={drawerOpen}
        closeDrawer={toggleDrawer}
        links={links}
      /> : <DesktopMenu
        name={topName || 'Success Builders Int\'l Schools'}
        links={links}
      />}
    </AppBar>
  );
};

const mapState = ({staff}) => ({
  isLoggedIn: staff.isLoggedIn
});

export default connect(mapState)(NavBar);
