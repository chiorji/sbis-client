import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import makeStyles from '@material-ui/styles/makeStyles';
import { getResult } from '../../store/result/resultThunk';

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

const DataForm = ({ getResult }) => {
  const { formControl, btn } = useStyles();
  const [formValues, setFormValues] = useState({
    examYear:       new Date(),
    examYearError:  false,
    examTerm:       '',
    examTermError:  false,
    examClass:      '',
    examClassError: false,
    regno:          '',
    regnoError:     false
  });

  const handleChange = (prop) => (e) => {
    setFormValues(prevValues => ({ ...prevValues, [prop]: prop === 'examYear' ? new Date(e) : e.target.value }));
  };

  const validateFormValues = () => {
    const { examYear, examTerm, examClass, regno } = formValues;
    setFormValues(prevValues => ({
      ...prevValues,
      examYearError:  false,
      examTermError:  false,
      examClassError: false,
      regnoError:     false
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
      setFormValues(prevValues => ({ ...prevValues, examYearError: true }));
      return false;
    }

    if (!examTerm) {
      setFormValues(prevValues => ({ ...prevValues, examTermError: true }));
      return false;
    }

    if (!examClass) {
      setFormValues(prevValues => ({ ...prevValues, examClassError: true }));
      return false;
    }
    // Regno format is "SBIS/2021/UNfve2"
    if (!regno || !validator.matches(regno, /^SBIS\/\b\d{4}\b\/\b[A-Z0-9]{6}\b$/i)) {
      setFormValues(prevValues => ({ ...prevValues, regnoError: true }));
      return false;
    }
    // return true when all fields validates
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { examYear, examTerm, examClass, regno } = formValues;
    if (validateFormValues()) {
      getResult({
        examYear: new Date(examYear).getFullYear(),
        examTerm, examClass, regno
      });
    } else {
      console.log(''); // eslint-disable-line
    }
  };

  const clsOpts = [
    { label: 'Select class', value: '' },
    { label: 'JS 1', value: 'JS1' },
    { label: 'JS 2', value: 'JS2' },
    { label: 'JS 3', value: 'JS3' },
    { label: 'SS 1', value: 'SS1' },
    { label: 'SS 2', value: 'SS2' },
    { label: 'SS 3', value: 'SS3' }
  ];

  const termOpts = [
    { label: 'Select term', value: '' },
    { label: 'FIRST TERM', value: 'first_term' },
    { label: 'SECOND TERM', value: 'second_term' },
    { label: 'THIRD TERM', value: 'third_term' }
  ];

  const {
    examYear,
    examTerm,
    examClass,
    regno,
    examYearError,
    examTermError,
    examClassError,
    regnoError
  } = formValues;

  return (
    <Grid item xs={12} sm={6}>
      <form noValidate onSubmit={handleSubmit}>
        <FormGroup row={true}>
          <KeyboardDatePicker
            error={examYearError}
            views={[ 'year' ]}
            label='Exam Year'
            value={examYear}
            onChange={handleChange('examYear')}
            inputVariant='outlined'
            variant='dialog'
            className={formControl}
            autoOk={true}
            orientation='landscape'
            animateYearScrolling={true}
          />

          <FormControl variant="outlined" className={formControl} error={examTermError}>
            <InputLabel id="examTerm">Term</InputLabel>
            <Select
              labelId="examTerm"
              id="examTerm"
              value={examTerm}
              name="examTerm"
              onChange={handleChange('examTerm')}
              label="Term"
            >
              {termOpts.map(({ label, value }) => (
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
              onChange={handleChange('examClass')}
              label="Class"
            >
              {clsOpts.map(({ label, value }) => (
                <MenuItem key={value} value={value}  disabled={value === ''}>{label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={formControl}>
            <TextField
              error={regnoError}
              label="Reg No"
              id="regno"
              name="regno"
              variant="outlined"
              autoComplete="off"
              value={regno}
              onChange={handleChange('regno')}
            />
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

const mapState = ({ result }) => ({
  regno: result.regno,
  pin:   result.scratchPin
});

const mapDispatch = (dispatch) => ({
  getResult: (payload) => dispatch(getResult(payload))
});

export default connect(mapState, mapDispatch)(DataForm);
