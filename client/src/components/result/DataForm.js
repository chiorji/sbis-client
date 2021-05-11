/* eslint-disable no-unused-vars, no-console */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import {getResult} from '../../store/checker/checkThunks';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin:                         theme.spacing(1),
    flexGrow:                       1,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  btn: {
    width:                          '50%',
    margin:                         theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width:  '96%',
      margin: '0 auto'
    }
  }
}));

const DataForm = ({getResult}) => {
  const history = useHistory();
  const {formControl, btn} = useStyles();
  const [formValues, setFormValues] = useState({
    examYear:       '',
    examYearError:  false,
    examTerm:       '',
    examTermError:  false,
    examClass:      '',
    examClassError: false
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues(prevValues => ({...prevValues, [name]: value}));
  };

  const validateFormValues = () => {
    const {examYear, examTerm, examClass} = formValues;
    setFormValues(prevValues => ({
      ...prevValues,
      examYearError:  false,
      examTermError:  false,
      examClassError: false
    }));

    if (!examYear && !examTerm && !examClass) {
      setFormValues(prevValues => ({
        ...prevValues,
        examYearError:  true,
        examTermError:  true,
        examClassError: true
      }));
      return false;
    }

    if (!examYear) {
      setFormValues(prevValues => ({...prevValues, examYearError: true}));
      return false;
    }

    if (!examTerm) {
      setFormValues(prevValues => ({...prevValues, examTermError: true}));
      return false;
    }

    if (!examClass) {
      setFormValues(prevValues => ({...prevValues, examClassError: true}));
      return false;
    }
    // return true when all fields validates
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {examYear, examTerm, examClass} = formValues;
    if (validateFormValues()) {
      getResult({examYear, examTerm, examClass});
    } else {
      console.log('validation failed');
    }
  };

  // TODO: modify to programmatically generate year values
  const yearOpts = ['', '2021', '2022', '2023', '2024', '2025'];

  const clsOpts = [
    {label: 'Select class', value: ''},
    {label: 'JS 1', value: 'JS1'},
    {label: 'JS 2', value: 'JS2'},
    {label: 'JS 3', value: 'JS3'},
    {label: 'SS 1', value: 'SS1'},
    {label: 'SS 2', value: 'SS2'},
    {label: 'SS 3', value: 'SS3'}
  ];

  const termOpts = [
    {label: 'Select term', value: ''},
    {label: 'FIRST TERM', value: 'first_term'},
    {label: 'SECOND TERM', value: 'second_term'},
    {label: 'THIRD TERM', value: 'third_term'}
  ];

  const {
    examYear,
    examTerm,
    examClass,
    examYearError,
    examTermError,
    examClassError
  } = formValues;

  return (
    <Grid item xs={12} sm={6}>
      <form noValidate onSubmit={handleSubmit}>
        <FormGroup row={true}>
          <FormControl variant="outlined" className={formControl} error={examYearError}>
            <InputLabel id="examYear">Year</InputLabel>
            <Select
              labelId="examYear"
              id="examYear"
              value={examYear}
              name="examYear"
              onChange={handleChange}
              label="Year"
            >
              {yearOpts.map(year => (
                <MenuItem key={year} value={year} disabled={year === ''}>{year !== '' ? year : 'Select year'}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl variant="outlined" className={formControl} error={examTermError}>
            <InputLabel id="examTerm">Term</InputLabel>
            <Select
              labelId="examTerm"
              id="examTerm"
              value={examTerm}
              name="examTerm"
              onChange={handleChange}
              label="Term"
            >
              {termOpts.map(({label, value}) => (
                <MenuItem key={value} value={value} disabled={value === ''}>{label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>

        <FormGroup row={true}>
          <FormControl variant="outlined" className={formControl} error={examClassError}>
            <InputLabel id="examClass">Class</InputLabel>
            <Select
              labelId="examClass"
              id="examClass"
              value={examClass}
              name="examClass"
              onChange={handleChange}
              label="Class"
            >
              {clsOpts.map(({label, value}) => (
                <MenuItem key={value} value={value}  disabled={value === ''}>{label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>
        <FormGroup row={true}>
          <Button {...{
            variant:   'outlined',
            type:      'submit',
            color:     'primary',
            size:      'large',
            className: btn
          }}
          >
          Check Result
          </Button>
        </FormGroup>
      </form>
    </Grid>
  );
};

const mapState = ({checker}) => ({
  regno: checker.regno,
  pin:   checker.scratchPin
});

const mapDispatch = (dispatch) => ({
  getResult: (payload) => dispatch(getResult(payload))
});

export default connect(mapState, mapDispatch)(DataForm);
