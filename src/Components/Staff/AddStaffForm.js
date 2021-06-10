import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { customAlphabet } from 'nanoid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import { addStaff } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  gridItem: {
    display:        'flex',
    justifyContent: 'center',
    flexDirection:  'column',
    margin:         '0 auto',
    marginTop:      theme.spacing(3)
  },
  heading: {
    marginTop:    theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  rowText: {
    flexGrow: 1,
    margin:   theme.spacing(1)
  },
  submitBtn: {
    margin: theme.spacing(1)
  }
}));

const AddStaffForm = ({ addStaff = f => f }) => {
  const ALPHAS = 'ABCDEF@$0123456789><%&';
  const { gridItem, heading, rowText, submitBtn } = useStyles();
  const [ formValues, setFormValues ] = useState({
    password:       '',
    email:          '',
    form_class:     '',
    role:           'USER',
    first_name:     '',
    last_name:      '',
    gender:         'Rather not say',
    passwordError:  false,
    firstNameError: false,
    lastNameError:  false,
    emailError:     false,
    formClassError: false,
    roleError:      false
  });

  const validateFields = () => {
    // reset error fields to default
    setFormValues(prevState => ({
      ...prevState,
      passwordError:  false,
      firstNameError: false,
      lastNameError:  false,
      emailError:     false,
      formClassError: false,
      roleError:      false
    }));
    if (!password) {
      setFormValues(prevState => ({ ...prevState, passwordError: true }));
      return false;
    }
    if (!first_name) {
      setFormValues(prevState => ({ ...prevState, firstNameError: true }));
      return false;
    }
    if (!last_name) {
      setFormValues(prevState => ({ ...prevState, lastNameError: true }));
      return false;
    }
    if (!email || !validator.isEmail(email)) {
      setFormValues(prevState => ({ ...prevState, emailError: true }));
      return false;
    }
    if (!form_class) {
      setFormValues(prevState => ({ ...prevState, formClassError: true }));
      return false;
    }
    if (!role) {
      setFormValues(prevState => ({ ...prevState, roleError: true }));
      return false;
    }

    return true;
  };

  const handleChange = (prop) => (e) => {
    setFormValues(prevState => ({ ...prevState, [prop]: e.target.value }));
  };

  const handleSubmit = (e) => {
    const {
      password,
      first_name,
      last_name,
      gender,
      email,
      form_class,
      role
    } = formValues;
    e.preventDefault();
    if (validateFields()) {
      addStaff({
        password,
        first_name,
        last_name,
        email,
        form_class,
        gender,
        role
      });
    } else {
      console.log('submission failed...'); // eslint-disable-line
      return false;
    }
  };

  const clsOpts = ['Select Form Class', 'JS1', 'JS2', 'JS3', 'SS1', 'SS2', 'SS3'];

  const { password, passwordError, first_name, last_name, email,
    emailError, form_class, formClassError, role, roleError,
    firstNameError, lastNameError, gender } = formValues;

  return (
    <Grid item xs={12} md={6} className={gridItem}>
      <Typography variant="h4" className={heading}>Add new member</Typography>
      <form noValidate onSubmit={handleSubmit}>
        <FormGroup row={true}>
          <TextField
            type="text"
            error={passwordError}
            id="id"
            name="id"
            label="Password*"
            variant="outlined"
            autoComplete="off"
            className={rowText}
            value={password}
            readOnly
          />
          <Button
            type="button"
            variant="outlined"
            color="default"
            size="large"
            disabled={password ? true : false}
            className={rowText}
            disableElevation={true}
            onClick={() => setFormValues(prev => ({
              ...prev,
              password: customAlphabet(ALPHAS, 12)()
            }))}
          >Generate Password</Button>
        </FormGroup>

        <FormGroup row={true}>
          <TextField
            type="text"
            error={firstNameError}
            id="first_name"
            name="first_name"
            label="First Name*"
            variant="outlined"
            autoComplete="off"
            className={rowText}
            value={first_name}
            onChange={handleChange('first_name')}
          />
          <TextField
            type="text"
            error={lastNameError}
            id="last_name"
            name="last_name"
            label="Last Name*"
            variant="outlined"
            autoComplete="off"
            className={rowText}
            value={last_name}
            onChange={handleChange('last_name')}
          />
        </FormGroup>
        <FormGroup row={true}>
          <TextField
            type="email"
            error={emailError}
            id="username"
            name="email"
            label="Email Address*"
            variant="outlined"
            autoComplete="off"
            className={rowText}
            value={email}
            onChange={handleChange('email')}
          />
        </FormGroup>
        <FormGroup row={true}>
          <FormControl variant="outlined" className={rowText}>
            <InputLabel id="gender">Gender*</InputLabel>
            <Select
              labelId="gender"
              id="role"
              value={gender}
              name="gender"
              onChange={handleChange('gender')}
              label="Gender*"
            >
              {['Rather not say', 'Male', 'Female'].map((value, index) => (
                <MenuItem key={value} value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={rowText} error={formClassError}>
            <InputLabel id="examClass">Form Class</InputLabel>
            <Select
              labelId="formClass"
              id="formClass"
              value={form_class}
              name="formClass"
              onChange={handleChange('form_class')}
              label="Form Class"
            >
              {clsOpts.map((value, index) => (
                <MenuItem
                  key={value}
                  value={value}
                  disabled={index === 0}
                >
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>
        <FormGroup row={true}>
          <FormControl variant="outlined" className={rowText} error={roleError}>
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="role"
              value={role}
              name="role"
              onChange={handleChange('role')}
              label="Role"
            >
              {['ASSIGN ROLE', 'USER', 'ADMIN'].map((value, index) => (
                <MenuItem key={value} value={value}
                  disabled={index === 0 || value !== 'USER'}
                >{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>
        <Button
          type="submit"
          variant="contained"
          id='submit'
          size='large'
          color="primary"
          className={submitBtn}
          disableElevation={true}
        >Complete</Button>
      </form>
    </Grid>
  );
};

const mapDispatch = (dispatch) => ({
  addStaff: (payload) => dispatch(addStaff(payload))
});

export default connect(null, mapDispatch)(AddStaffForm);
