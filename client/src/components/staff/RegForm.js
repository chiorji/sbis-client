import React, {useState} from 'react';
/* eslint-disable no-unused-vars, no-console */
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import makeStyles from '@material-ui/styles/makeStyles';
import {DatePicker, KeyboardDatePicker} from '@material-ui/pickers';

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

const RegForm = () => {
  const {gridContainer, textFields, form} = useStyles();

  const [formValues, setFormValues] = useState({
    first_name:            '',
    last_name:             '',
    middle_name:           '',
    gender:                '',
    nationality:           '',
    registered_class:      '',
    blood_group:           '',
    religious_belief:      '',
    state_of_origin:       '',
    local_govt_of_origin:  '',
    bio:                   '',
    guardian_name:         '',
    guardian_home_address: '',
    guradian_phone_number: '',
    guradian_email:        '',
    guradian_gender:       '',
    guardian_nationality:  '',
    dob:                   new Date()
  });

  const {
    first_name,
    bio,
    last_name,
    middle_name,
    gender,
    nationality,
    registered_class,
    blood_group,
    religious_belief,
    dob,
    state_of_origin,
    local_govt_of_origin,
    guardian_name,
    guardian_home_address,
    guradian_phone_number,
    guradian_email,
    guradian_gender,
    guardian_nationality} = formValues;

  const handleChange = (prop) => (e) => {
    console.log(prop, e.target.value);
    setFormValues(prevState => ({...prevState, [prop]: e.target.value}));
  };

  const handleDateChange = (date) => {
    setFormValues(prevState => ({...prevState, dob: date}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted...');
  };

  return (
    <Box width={1} component="section">
      <Typography variant="body1">Student Registration Form</Typography>
      <Grid container spacing={3} className={gridContainer}>
        <Grid item xs={12} md={12}>
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <Typography variant="h6">Student Information</Typography>
              <TextField
                type="text"
                error={false}
                id="first_name"
                name="first_name"
                label="First Name"
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
                error={false}
                id="last_name"
                name="last_name"
                label="Last Name"
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
                error={false}
                id="nationality"
                name="nationality"
                label="Nationality"
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

              <FormControl variant="outlined" className={textFields} error={false}>
                <KeyboardDatePicker
                  autoOk
                  variant="inline"
                  name="dob"
                  id="dob"
                  inputVariant="outlined"
                  label="Date of birth"
                  format="MM/dd/yyyy"
                  value={dob}
                  InputAdornmentProps={{position: 'end'}}
                  onChange={date => handleDateChange(date)}
                />
              </FormControl>

              <FormControl variant="outlined" className={textFields} error={false}>
                <InputLabel id="gender">Gender</InputLabel>
                <Select
                  labelId="gender"
                  id="gender"
                  value={gender}
                  name="gender"
                  onChange={handleChange('gender')}
                  label="gender"
                >
                  {['Male', 'Female', 'Rather not say'].map(value => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={textFields} error={false}>
                <InputLabel id="state_of_origin">State of Origin</InputLabel>
                <Select
                  labelId="state_of_origin"
                  id="state_of_origin"
                  value={state_of_origin}
                  name="state_of_origin"
                  onChange={handleChange('state_of_origin')}
                  label="state_of_origin"
                >
                  {['Enugu', 'Anambra', 'Imo' ,'Abia'].map(value => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={textFields} error={false}>
                <InputLabel id="local_govt_of_origin">LGA of Origin</InputLabel>
                <Select
                  labelId="local_govt_of_origin"
                  id="local_govt_of_origin"
                  value={local_govt_of_origin}
                  name="local_govt_of_origin"
                  onChange={handleChange('local_govt_of_origin')}
                  label="local_govt_of_origin"
                >
                  {['Enugu', 'Anambra', 'Imo' ,'Abia'].map(value => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={textFields} error={false}>
                <InputLabel id="registered_class">Registered class</InputLabel>
                <Select
                  labelId="registered_class"
                  id="registered_class"
                  value={registered_class}
                  name="registered_class"
                  onChange={handleChange('registered_class')}
                  label="registered_class"
                >
                  {['JS1', 'JS2', 'JS3', 'SS1', 'SS2', 'SS3'].map(value => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h6">Guardian Information</Typography>
              <TextField
                type="text"
                error={false}
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
                error={false}
                id="guardian_name"
                name="guardian_name"
                label="Full Name"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_name}
                onChange={handleChange('guardian_name')}
              />

              <TextField
                type="text"
                error={false}
                id="guardian_home_address"
                name="guardian_home_address"
                label="Home Address"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_home_address}
                onChange={handleChange('guardian_home_address')}
              />
              <TextField
                type="text"
                error={false}
                id="guradian_phone_number"
                name="guradian_phone_number"
                label="Phone Number"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guradian_phone_number}
                onChange={handleChange('guradian_phone_number')}
              />
              <TextField
                type="text"
                error={false}
                id="guradian_email"
                name="guradian_email"
                label="Email Address"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guradian_email}
                onChange={handleChange('guradian_email')}
              />
              <TextField
                type="text"
                error={false}
                id="guardian_nationality"
                name="guardian_nationality"
                label="Nationality"
                variant="outlined"
                autoComplete="off"
                className={textFields}
                value={guardian_nationality}
                onChange={handleChange('guardian_nationality')}
              />
              <FormControl variant="outlined" className={textFields} error={false}>
                <InputLabel id="guradian_gender">Gender</InputLabel>
                <Select
                  labelId="guradian_gender"
                  id="guradian_gender"
                  value={guradian_gender}
                  name="guradian_gender"
                  onChange={handleChange('guradian_gender')}
                  label="guradian_gender"
                >
                  {['Male', 'Female', 'Rather not say'].map(value => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <Button type="submit" variant="contained" size="large" color="primary">Register</Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};



export default RegForm;

