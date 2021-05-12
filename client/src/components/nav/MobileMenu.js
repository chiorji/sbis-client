import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuDisplayChoice from './MenuDisplayChoice';

const MobileMenu = ({name, drawerOpen, closeDrawer, links}) => {
  return (
    <ToolBar>
      <IconButton {...{
        edge:            'start',
        color:           'inherit',
        'aria-label':    'menu',
        'aria-haspopup': 'true',
        onClick:         closeDrawer,
        id:              'homeBtn'
      }}
      >
        <Menu/>
      </IconButton>
      <Drawer {...{
        anchor:  'left',
        open:    drawerOpen,
        onClose: closeDrawer
      }}
      >
        <MenuDisplayChoice links={links} largeScreen={false} menuStyle={''} />
      </Drawer>
      <Button
        {...{
          component: RouterLink,
          color:     'inherit',
          to:        '/',
          style:     {textDecoration: 'none', fontSize: '20px', fontWeight: 'bold'}
        }}
      >{name}</Button>
    </ToolBar>
  );
};

MobileMenu.propTypes = {
  name:        PropTypes.string.isRequired,
  drawerOpen:  PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  links:       PropTypes.arrayOf(
    PropTypes.shape({
      id:    PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      to:    PropTypes.string.isRequired
    })).isRequired
};

export default MobileMenu;
