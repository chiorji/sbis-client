import React from 'react';
import PropTypes from 'prop-types';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
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
        onClick:         closeDrawer
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
        <MenuDisplayChoice links={links} largeScreen={false} menuStyle={''}/>
      </Drawer>
      <Typography component="h2" variant="h6">{name}</Typography>
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
