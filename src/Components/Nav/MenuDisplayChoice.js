import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as RouteLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const MenuDisplayChoice = ({ links, largeScreen, menuStyle }) => {
  return links.map(({ label, to, id }) => !largeScreen  ? (
    <Link
      component= {to.indexOf('#') > -1 ? HashLink : RouteLink}
      to=        {to}
      color=     'inherit'
      style=    {{ textDecoration: 'none', width: '250px' }}
      key=       {label}
      id=        {label}
    >
      <MenuItem>{label}</MenuItem>
    </Link>
  ) :
    <Button
      component= {to.indexOf('#') > -1 ? HashLink : RouteLink}
      to=        {to}
      color=     'inherit'
      key=       {label}
      id={label}
      style={{ textTransform: 'none' }}
      className= {menuStyle}
    >
      {label}
    </Button>
  );
};

export default MenuDisplayChoice;
