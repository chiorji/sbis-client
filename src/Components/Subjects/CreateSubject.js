import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createSubject } from '../../store/staff/actions';
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

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection:  'column',
    display:        'flex',
    justifyContent: 'center',
    alignContent:   'center',
    alignItems:     'center'
  },
  textFields: {
    width:        '100%',
    marginBottom: theme.spacing(3)
  }
}));

const CreateSubject = ({ createSubject }) => {
  const { container, textFields } = useStyles();

  const [subject, setSubject] = useState({
    name:          '',
    nameError:     false,
    code:          '',
    category:      'UNCATEGORIZED',
    categoryError: false,
    teacher:       '',
    teacherError:  false
  });

  const { name, nameError, code, category,
    categoryError, teacher, teacherError } = subject;

  const validated = () => {
    // clear previous error
    setSubject(prevState => ({
      ...prevState,
      nameError:     false,
      categoryError: false,
      teacherError:  false
    }));

    if (!name) {
      setSubject(prevState => ({ ...prevState, nameError: true }));
      return false;
    }
    if (!category) {
      setSubject(prevState => ({ ...prevState, categoryError: true }));
      return false;
    }
    if (!teacher) {
      setSubject(prevState => ({ ...prevState, teacherError: true }));
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validated()) {
      const { name, code, category, teacher } = subject;
      createSubject({ name, code, category, teacher });
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
      <Typography variant="h4" align="center" gutterBottom>Add Subject</Typography>
      <Grid container className={container}>
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
                  {subjectCategories.map((value) => (
                    <MenuItem key={value}
                      value={value.toLowerCase()}
                    >{value}</MenuItem>
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

const mapDispatch = (dispatch) => ({
  createSubject: (payload) => dispatch(createSubject(payload))
});

export default connect(null, mapDispatch)(CreateSubject);
