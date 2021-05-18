import React, {useState} from 'react';
import {connect} from 'react-redux';
// import validator from 'validator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import {makeStyles} from '@material-ui/styles';

/* eslint-disable no-console */
const useStyles = makeStyles(theme => ({
  textFields: {
    width:        '100%',
    marginBottom: theme.spacing(3)
  }
}));

const CreateSubject = () => {
  const {textFields} = useStyles();

  const [subject, setSubject] = useState({
    name:          '',
    nameError:     false,
    code:          '',
    category:      '',
    categoryError: false,
    teacher:       '',
    teacherError:  false
  });

  const {name, nameError, code, category,
    categoryError, teacher, teacherError} = subject;

  const validated = () => {
    // clear previous error
    setSubject(prevState => ({
      ...prevState,
      nameError:     false,
      categoryError: false,
      teacherError:  false
    }));

    if (!name) {
      setSubject(prevState => ({...prevState, nameError: true}));
      return false;
    }
    if (!category) {
      setSubject(prevState => ({...prevState, categoryError: true}));
      return false;
    }
    if (!teacher) {
      setSubject(prevState => ({...prevState, teacherError: true}));
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validated()) {
      console.log('Submitted');
    } else {
      console.log('Submission failed');
    }
  };

  const handleChange = (prop) => (e) => {
    console.log(prop, e.target.value);
    setSubject(prevState => ({...prevState, [prop]: e.target.value}));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>Create Subject</Typography>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
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

            <TextField
              type="text"
              id="code"
              name="code"
              label="Subject code"
              variant="outlined"
              helperText="Optional"
              autoComplete="off"
              className={textFields}
              value={code}
              onChange={handleChange('code')}
            />

            <TextField
              type="text"
              error={teacherError}
              id="regno"
              name="regno"
              label="Subject teacher"
              variant="outlined"
              helperText="Teacher handling subject"
              autoComplete="off"
              className={textFields}
              value={teacher}
              onChange={handleChange('teacher')}
            />

            <FormGroup row={true}>
              <FormControl variant="outlined" className={textFields} error={categoryError}>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category"
                  id="category"
                  value={category}
                  name="category"
                  onChange={handleChange('category')}
                  label="Category"
                >
                  {['SENIOR', 'JUNIOR', 'UNCATEGORIZED'].map((value) => (
                    <MenuItem key={value} value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button {...{
                variant: 'outlined',
                type:    'submit',
                color:   'primary',
                id:      'submit',
                size:    'large'
              }}
              >
          Create subject
              </Button>
            </FormGroup>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default connect()(CreateSubject);
