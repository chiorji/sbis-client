import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import MenuDisplayChoice from './MenuDisplayChoice';
import {ReactComponent as Logo} from '../logo.svg';

const useStyles = makeStyles(() => ({
  toolbar: {
    display:        'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size:       '18px',
    marginLeft: '38px'
  },
  linkButton: {
    fontSize: '20px'
  },
  icon: {
    display:        'flex',
    justifyContent: 'flex-start'
  },
  logo: {
    width:  '80px',
    height: '80px'
  }
}));

const DesktopMenu = ({name, links}) => {
  const {toolbar, menuButton, linkButton, logo, icon} = useStyles();

  return (
    <ToolBar className={toolbar}>
      <Typography component="h2" variant="h5" className={icon}>
        <Button {...{
          component: Link,
          to:        '/',
          color:     'inherit',
          className: linkButton,
          startIcon: <Logo alt="Logo" className={logo} fill="currentColor"/>
        }}
        >{name}</Button>
      </Typography>
      <Typography component="div" className={toolbar}>
        <MenuDisplayChoice links={links} largeScreen={true}
          menuStyle={menuButton}
        />
      </Typography>
    </ToolBar>
  );
};

DesktopMenu.propTypes = {
  name: PropTypes.string.isRequired
};

export default DesktopMenu;
