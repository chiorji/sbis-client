import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import makeStyles from '@material-ui/styles/makeStyles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import {
  registerStudent, fetchStates, fetchLgas
} from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  gridContainer: {
    marginTop:              theme.spacing(2),
    '& .MuiTextField-root': {
      margin:                         theme.spacing(1),
      width:                          '30ch',
      [theme.breakpoints.down('sm')]: {
        width:        '100%',
        margin:       0,
        marginBottom: theme.spacing(3)
      }
    }
  },
  form: {
    display:        'flex',
    justifyContent: 'space-between'
  },
  textFields: {
    width:                          '30ch',
    marginBottom:                   theme.spacing(3),
    margin:                         theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width:        '100%',
      margin:       0,
      marginBottom: theme.spacing(3)
    }
  }
}));

/* eslint-disable no-console */
const AdmissionForm = ({ registerStudent, isLoading, fetchStates, states,
  fetchLgas = f => f, lgas }) => {
  const { gridContainer, textFields } = useStyles();

  const [formValues, setFormValues] = useState({
    first_name:            '',
    middle_name:           '',
    last_name:             '',
    gender:                '',
    nationality:           'Nigerian',
    current_class:         '',
    registered_class:      '',
    blood_group:           '',
    religious_belief:      '',
    state_of_origin:       '',
    local_govt_of_origin:  '',
    bio:                   '',
    guardian_name:         '',
    guardian_home_address: '',
    guardian_phone_number: '',
    guardian_email:        '',
    guardian_gender:       '',
    guardian_nationality:  'Nigerian',
    dob:                   new Date('01-01-2000')
  });

  const {
    first_name, // required
    bio,
    last_name, // required
    middle_name,
    gender, // required
    nationality, // required
    registered_class, // required
    current_class, // required
    blood_group,
    religious_belief,
    dob, // required
    state_of_origin, // required
    local_govt_of_origin, // required
    guardian_name, // required
    guardian_home_address, // required
    guardian_phone_number, // required
    guardian_email,
    guardian_gender, // required
    guardian_nationality // required
  } = formValues;

  const [validState, setValidState] = useState({
    firstNameError:           false,
    lastNameError:            false,
    genderError:              false,
    currentClassError:        false,
    registeredClassError:     false,
    stateOfOriginError:       false,
    dobError:                 false,
    nationalityError:         false,
    lgaOfOriginError:         false,
    guardianNameError:        false,
    guardianHomeAddressError: false,
    guardianPhoneNumberError: false,
    guardianNationalityError: false
  });

  const { firstNameError,
    lastNameError,
    genderError,
    currentClassError,
    registeredClassError,
    stateOfOriginError,
    dobError,
    nationalityError,
    lgaOfOriginError,
    guardianNameError,
    guardianHomeAddressError,
    guardianPhoneNumberError,
    guardianGenderError,
    guardianNationalityError } = validState;

  const validateRequiredField = () => {
    // reset prev values
    setValidState(prevState => ({
      ...prevState,
      firstNameError:           false,
      lastNameError:            false,
      genderError:              false,
      currentClassError:        false,
      registeredClassError:     false,
      stateOfOriginError:       false,
      dobError:                 false,
      nationalityError:         false,
      lgaOfOriginError:         false,
      guardianNameError:        false,
      guardianHomeAddressError: false,
      guardianPhoneNumberError: false,
      guardianEmailError:       false,
      guardianGenderError:      false,
      guardianNationalityError: false
    }));

    if (!first_name) {
      setValidState(prevState => ({ ...prevState, firstNameError: true }));
      return false;
    }

    if (!last_name) {
      setValidState(prevState => ({ ...prevState, lastNameError: true }));
      return false;
    }

    if (!dob) {
      setValidState(prevState => ({ ...prevState, dobError: true }));
      return false;
    }

    if (!current_class || !registered_class) {
      setValidState(prevState => ({
        ...prevState,
        currentClassError:    true,
        registeredClassError: true
      }));
      return false;
    }

    if (!nationality) {
      setValidState(prevState => ({ ...prevState, nationalityError: true }));
      return false;
    }

    if (!state_of_origin || !local_govt_of_origin) {
      setValidState(prevState => ({
        ...prevState,
        stateOfOriginError: true,
        lgaOfOriginError:   true
      }));
      return false;
    }

    if (!guardian_name) {
      setValidState(prevState => ({ ...prevState, guardianNameError: true }));
      return false;
    }

    if (!guardian_name) {
      setValidState(prevState => ({ ...prevState, guardianNameError: true }));
      return false;
    }

    if (!guardian_home_address) {
      setValidState(prevState => ({
        ...prevState,
        guardianHomeAddressError: true
      }));
      return false;
    }

    if (!guardian_phone_number) {
      setValidState(prevState => ({
        ...prevState,
        guardianPhoneNumberError: true
      }));
      return false;
    }

    if (!guardian_gender) {
      setValidState(prevState => ({
        ...prevState,
        guardianGenderError: true
      }));
      return false;
    }

    return true;
  };

  const handleChange = (prop) => (e) => {
    setFormValues(prevState => ({ ...prevState, [prop]: e.target.value }));
  };

  const handleDateChange = (date) => {
    setFormValues(prevState => ({ ...prevState, dob: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateRequiredField()) {
      registerStudent(formValues);
    } else {
      console.log('Error validating, aborted');
      return false;
    }
  };

  // Fetch states on mount
  useEffect(() => {
    fetchStates();
  }, [fetchStates]);

  useEffect(() => {
    fetchLgas(state_of_origin);
  }, [state_of_origin, fetchLgas]);

  const classList = [ 'JS1', 'JS2', 'JS3', 'SS1', 'SS2', 'SS3' ];
  const genderList = [ 'Male', 'Female', 'Rather not say' ];

  return (
    <Box width={1} component="section">
      <Typography paragraph>NB: All the field marked with
      asterisk(*) are considered compulsory, and the form will not
      submit until these fields are filled out.
      </Typography>
      <Grid container spacing={3} className={gridContainer}>
        <Grid item xs={12} md={12}>
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <Typography variant="h6" gutterBottom>Student Information</Typography>
              <TextField
                type="text"
                error={firstNameError}
                id="first_name"
                name="first_name"
                label="First Name*"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={first_name}
                onChange={handleChange('first_name')}
              />

              <TextField
                type="text"
                error={false}
                id="middle_name"
                name="middle_name"
                label="Middle Name"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={middle_name}
                onChange={handleChange('middle_name')}
              />

              <TextField
                type="text"
                error={lastNameError}
                id="last_name"
                name="last_name"
                label="Last Name*"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={last_name}
                onChange={handleChange('last_name')}
              />

              <TextField
                type="text"
                error={false}
                id="bio"
                name="bio"
                label="Bio"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={bio}
                onChange={handleChange('bio')}
                multiline
              />

              <TextField
                type="text"
                error={nationalityError}
                id="nationality"
                name="nationality"
                label="Nationality*"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={nationality}
                onChange={handleChange('nationality')}
              />
              <FormControl variant="outlined" className={textFields} error={false}>
                <InputLabel id="blood_group">Blood Group</InputLabel>
                <Select
                  labelId="blood_group"
                  id="blood_group"
                  value={blood_group}
                  name="blood_group"
                  onChange={handleChange('blood_group')}
                  label="blood_group"
                >
                  {['A', 'B', 'O', 'AB', 'Unspecified'].map(value => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <KeyboardDatePicker
                autoOk
                variant="inline"
                name="dob"
                id="dob"
                error={dobError}
                inputVariant="outlined"
                label="Date of birth*"
                format="MM/dd/yyyy"
                value={dob}
                InputAdornmentProps={{ position: 'end' }}
                onChange={date => handleDateChange(date)}
              />

              <FormControl variant="outlined" className={textFields} error={genderError}>
                <InputLabel id="gender">Gender*</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  value={gender}
                  name="gender"
                  onChange={handleChange('gender')}
                  label="Gender*"
                >
                  {genderList.map(value => (
                    <MenuItem key={value}
                      value={value.toLowerCase()}
                    >{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={textFields} error={stateOfOriginError}>
                <InputLabel id="state_of_origin">State of Origin*</InputLabel>
                <Select
                  labelId="state_of_origin"
                  id="state_of_origin"
                  value={state_of_origin}
                  name="state_of_origin"
                  onChange={handleChange('state_of_origin')}
                  label="State of Origin*"
                >
                  {states && states.map(({ name, capital }) => (
                    <MenuItem key={capital}
                      value={name}
                    >{name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={textFields} error={lgaOfOriginError}>
                <InputLabel id="local_govt_of_origin">LGA of Origin*</InputLabel>
                <Select
                  labelId="local_govt_of_origin"
                  id="local_govt_of_origin"
                  value={local_govt_of_origin}
                  name="local_govt_of_origin"
                  onChange={handleChange('local_govt_of_origin')}
                  label="LGA of Origin*"
                >
                  {lgas && lgas.map(value => (
                    <MenuItem key={value}
                      value={value}
                    >{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={textFields} error={registeredClassError}>
                <InputLabel id="registered_class">Registered Class*</InputLabel>
                <Select
                  labelId="registered_class"
                  id="registered_class"
                  value={registered_class}
                  name="registered_class"
                  onChange={handleChange('registered_class')}
                  label="Registered Class*"
                >
                  {classList.map(value => (
                    <MenuItem key={value}
                      value={value.toLowerCase()}
                    >{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={textFields} error={currentClassError}>
                <InputLabel id="current_class">Current Class*</InputLabel>
                <Select
                  labelId="current_class"
                  id="current_class"
                  value={current_class}
                  name="current_class"
                  onChange={handleChange('current_class')}
                  label="Current Class*"
                >*
                  {classList.map(value => (
                    <MenuItem key={value}
                      value={value.toLowerCase()}
                    >{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <Typography variant="h6" gutterBottom>{''}</Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>{''}</Typography>
              <Typography variant="h6" gutterBottom>Guardian Information</Typography>
              <TextField
                type="text"
                error={guardianNameError}
                id="guardian_name"
                name="guardian_name"
                label="Full Name*"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_name}
                onChange={handleChange('guardian_name')}
              />

              <TextField
                type="text"
                id="religious_belief"
                name="religious_belief"
                label="Religious Belief"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={religious_belief}
                onChange={handleChange('religious_belief')}
              />
              <TextField
                type="text"
                error={guardianHomeAddressError}
                id="guardian_home_address"
                name="guardian_home_address"
                label="Home Address*"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_home_address}
                onChange={handleChange('guardian_home_address')}
              />
              <TextField
                type="text"
                error={guardianPhoneNumberError}
                id="guardian_phone_number"
                name="guardian_phone_number"
                label="Phone Number*"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_phone_number}
                onChange={handleChange('guardian_phone_number')}
              />
              <TextField
                type="text"
                id="guardian_email"
                name="guardian_email"
                label="Email Address"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_email}
                onChange={handleChange('guardian_email')}
              />
              <TextField
                type="text"
                error={guardianNationalityError}
                id="guardian_nationality"
                name="guardian_nationality"
                label="Nationality*"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_nationality}
                onChange={handleChange('guardian_nationality')}
              />
              <FormControl variant="outlined" className={textFields} error={guardianGenderError}>
                <InputLabel id="guardian_gender">Gender*</InputLabel>
                <Select
                  labelId="guardian_gender"
                  id="guardian_gender"
                  value={guardian_gender}
                  name="guardian_gender"
                  onChange={handleChange('guardian_gender')}
                  label="Gender*"
                >
                  {genderList.map(value => (
                    <MenuItem key={value}
                      value={value.toLowerCase()}
                    >{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              disableElevation
              disabled={isLoading}
            >Register</Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

const mapDispatch = (dispatch) => ({
  registerStudent: (payload) => dispatch(registerStudent(payload)),
  hideAlert:       () => dispatch({ type: 'HIDE_ALERT' }),
  fetchStates:     () => dispatch(fetchStates()),
  fetchLgas:       (payload) => dispatch(fetchLgas(payload))
});

const mapState = ({ staff }) => ({
  isLoading: staff.isLoading,
  states:    staff.states,
  lgas:      staff.lgas
});

export default connect(mapState, mapDispatch)(AdmissionForm);

