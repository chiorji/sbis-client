import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/styles/makeStyles';

import Alert from '../Alert';
import { loginRequest } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  container: {
    margin: `${theme.spacing(8)}px 0`
  },
  gridContainer: {
    justifyContent:               'center',
    alignItems:                   'center',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(4)
    }
  },
  textFields: {
    width:        '100%',
    marginBottom: theme.spacing(3)
  },
  heading: {
    marginBottom: theme.spacing(2)
  }
}));

const Login = ({ login, alert, hideAlert }) => {
  const { container, textFields, gridContainer, heading } = useStyles();
  const [staffInfo, setStaffInfo] = useState({
    id:            '000001',
    username:      'admin@domain.com',
    password:      '123456',
    idError:       false,
    usernameError: false,
    passwordError: false,
    showPassword:  false
  });

  // Prevent default on eye-icon mouse down
  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  // Toggles password visibility on eye-icon click
  const togglePasswordVisibility = () => {
    setStaffInfo(prevState => ({
      ...prevState,
      showPassword: !prevState.showPassword
    }));
  };

  /**
   *  Validates user information before submit
   * @returns Boolean
   */
  const allFieldIsValid = () => {
    // clear prev errors
    setStaffInfo(prevState => ({
      ...prevState,
      idError:       false,
      usernameError: false,
      passwordError: false
    }));

    const { id, username, password } = staffInfo;

    if (!id && !password && !username) {
      setStaffInfo(prevState => ({
        ...prevState,
        idError:       true,
        usernameError: true,
        passwordError: true
      }));
      return false;
    }

    if (!validator.isLength(id, { min: 6, max: 6 })) {
      setStaffInfo(prevState => ({ ...prevState, idError: true }));
      return false;
    }

    if (!validator.isEmail(username)) {
      setStaffInfo(prevState => ({ ...prevState, usernameError: true }));
      return false;
    }

    if (!validator.isLength(password, { min: 6 })) {
      setStaffInfo(prevState => ({ ...prevState, passwordError: true }));
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffInfo(prevState => ({ ...prevState, [name]: value }));
  };

  /* eslint-disable no-console */
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, username, password } = staffInfo;
    if (allFieldIsValid()) {
      login({ id, username, password });
    } else {
      console.log('Submission failed: invalid params');
    }
  };
  /* eslint-enable no-console */

  const {
    id,
    username,
    password,
    idError,
    usernameError,
    passwordError,
    showPassword
  } = staffInfo;

  return (
    <Container component="section" className={container}>
      {alert?.shouldOpen &&
        <Alert
          openAlert={alert.shouldOpen}
          msg={alert.message}
          severity={alert.severity}
          handleClose={hideAlert}
        />
      }
      <Grid container spacing={3} className={gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" className={heading}>Administrator Portal</Typography>
          <Typography variant="body1">
            Access to this page is restricted. It&#39;s only meant to be used
            by <strong>staff</strong> of <strong>Success Builders
              International Schools</strong>,
            if you&#39;re currently not a staff in this institution; please <Link href='/'>{' '}click here</Link> to return to the main page.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              type="text"
              error={idError}
              id="id"
              name="id"
              label="Staff ID"
              variant="outlined"
              autoComplete="off"
              className={textFields}
              value={id}
              onChange={handleChange}
            />
            <TextField
              type="email"
              error={usernameError}
              id="username"
              name="username"
              label="Portal username"
              variant="outlined"
              autoComplete="off"
              className={textFields}
              value={username}
              onChange={handleChange}
            />
            <FormControl className={textFields} variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                error={passwordError}
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                autoComplete="off"
                value={password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      onMouseDown={handleMouseDown}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button {...{
              variant: 'outlined',
              type:    'submit',
              color:   'primary',
              id:      'submit',
              size:    'large'
            }}
            >
            continue
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapDispatch = dispatch => ({
  login:     (payload) => dispatch(loginRequest(payload)),
  hideAlert: () => dispatch({ type: 'HIDE_ALERT' })
});

const mapState = ({ account }) => ({
  alert: account.alert
});

export default connect(mapState, mapDispatch)(Login);
