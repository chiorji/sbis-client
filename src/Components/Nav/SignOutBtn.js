import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import MapIcon from '../../utils/MapIcon';

const useStyles = makeStyles(theme => ({
  btn: {
    backgroundColor: theme.palette.primary.dark,
    color:           theme.palette.grey[300],
    width:           '90%',
    borderRadius:    'unset',
    marginLeft:      theme.spacing(1.5),
    marginTop:       theme.spacing(3),
    '&:hover':       {
      color:  theme.palette.primary.dark,
      border: `1px solid ${theme.palette.primary.dark}`
    }
  }
}));

const SignOutBtn = ({ label, signout }) => {
  const { btn } = useStyles();
  return(
    <Button
      {...{
        onClick:   signout,
        color:     'inherit',
        id:        'signout',
        className: btn,
        endIcon:   <MapIcon name="signOut" />
      }}
    >
      {label}
    </Button>
  );
};

const mapDispatch = dispatch => ({
  signout: () => dispatch({ type: 'SIGN_OUT' })
});

export default connect(null, mapDispatch)(SignOutBtn);
