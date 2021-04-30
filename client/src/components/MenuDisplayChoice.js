import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {Link as RouteLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const MenuDisplayChoice = ({links, largeScreen, menuStyle}) => {
  return links.map(({label, to, id}) => !largeScreen  ? (
    <Link {...{
      component: RouteLink,
      to:        to,
      color:     'inherit',
      style:     {textDecoration: 'none'},
      key:       id
    }}
    >
      <MenuItem>{label}</MenuItem>
    </Link>
  ) :
    <Button
      {...{
        component: RouteLink,
        to:        to,
        color:     'inherit',
        key:       id,
        className: menuStyle
      }}
    >
      {label}
    </Button>
  );
};

export default MenuDisplayChoice;
