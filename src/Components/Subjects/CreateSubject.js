import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import * as actions from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  textFields: {
    width:        '100%',
    marginBottom: theme.spacing(3)
  }
}));

const CreateSubject = ({ staffList, createSubject, alert }) => {
  const { textFields } = useStyles();

  const [subject, setSubject] = useState({
    name:          '',
    category:      '',
    teacher:       '',
    nameError:     false,
    categoryError: false,
    teacherError:  false
  });

  const {
    name,
    nameError,
    category,
    categoryError,
    teacher,
    teacherError
  } = subject;

  const validated = () => {
    // clear previous error
    setSubject(prevState => ({
      ...prevState,
      nameError:     false,
      categoryError: false,
      teacherError:  false
    }));

    if (!(name && category && teacher)) {
      setSubject(prevState => ({
        ...prevState,
        nameError:     true,
        categoryError: true,
        teacherError:  true
      }));
      alert('error', 'Error: all fields are required before submitting');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validated()) {
      const { name, category, teacher } = subject;
      return createSubject({ name, category, teacher });
    } else {
      return false;
    }
  };

  const handleChange = (prop) => (e) => {
    setSubject(prevState => ({ ...prevState, [prop]: e.target.value }));
  };

  const subjectCategories = [
    'GENERAL',
    'SCIENCE',
    'ARTS',
    'SENIOR',
    'JUNIOR',
    'UNCATEGORIZED'
  ];
  return (
    <>
      <Typography variant="h5" gutterBottom>Create new subject</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              type="text"
              error={nameError}
              id="name"
              name="name"
              label="Subject name"
              variant="outlined"
              autoComplete="off"
              className={textFields}
              value={name}
              onChange={handleChange('name')}
            />

            <FormGroup row={true}>
              <FormControl variant="outlined" className={textFields} error={teacherError}>
                <InputLabel id="teacher">Select teacher</InputLabel>
                <Select
                  labelId="teacher"
                  id="teacher"
                  value={teacher}
                  name="teacher"
                  onChange={handleChange('teacher')}
                  label="Select teacher"
                >
                  {staffList.map((value) => (
                    <MenuItem key={value}
                      value={value.toLowerCase()}
                    >{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FormGroup>

            <FormGroup row={true}>
              <FormControl variant="outlined" className={textFields} error={categoryError}>
                <InputLabel id="category">Select Category</InputLabel>
                <Select
                  labelId="category"
                  id="category"
                  value={category}
                  name="category"
                  onChange={handleChange('category')}
                  label="Select Category"
                >
                  {subjectCategories.map((value) => (
                    <MenuItem key={value}
                      value={value.toLowerCase()}
                    >{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant='outlined'
                type='submit'
                color='primary'
                id='submit'
                size='large'
              >Create subject
              </Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

const mapDispatch = (dispatch) => ({
  createSubject: (payload) => dispatch(actions.createSubject(payload)),
  alert:         (sev, msg) => dispatch(actions.showAlert({
    severity: sev,
    message:  msg
  }))
});

const mapState = ({ staff }) => ({
  staffList: staff.stats.staff
});

export default connect(mapState, mapDispatch)(CreateSubject);
