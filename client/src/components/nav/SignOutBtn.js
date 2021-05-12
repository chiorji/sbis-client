import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import {signout} from '../../store/staff/staffThunk';

const useStyles = makeStyles(theme => ({
  btn: {
    backgroundColor:                theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      width:     '90%',
      margin:    '0 auto',
      marginTop: theme.spacing(3),
      color:     theme.palette.grey[300]
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4)
    }
  }
}));

const SignOutBtn = ({label, signout, isLoggedIn}) => {
  const {btn} = useStyles();
  return(
    isLoggedIn ? <Button
      {...{
        onClick:   signout,
        color:     'inherit',
        id:        'signout',
        className: btn
      }}
    >
      {label}
    </Button> : null
  );
};

const mapDispatch = dispatch => ({
  signout: () => dispatch(signout())
});

const mapState = ({staff}) => ({
  isLoggedIn: staff.isLoggedIn
});

export default connect(mapState, mapDispatch)(SignOutBtn);
