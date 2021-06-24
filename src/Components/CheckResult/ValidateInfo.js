import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import makeStyles from '@material-ui/styles/makeStyles';
import CustomizedSwitches from '../Switch';
import * as actions from '../../store/result/actions';
import {
  checkTermlyResult,
  checkCumulativeResult
} from '../../store/result/resultThunk';
import { useQuery } from '../../utils';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginBottom:                   theme.spacing(3),
    flexGrow:                       1,
    minWidth:                       '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  invalidYear: {
    backgroundColor: 'red',
    color:           theme.palette.common.white,
    padding:         theme.spacing(1),
    borderRadius:    '3px'
  },
  callout: {
    display:        'flex',
    flexDirection:  'row',
    justifyContent: 'space-around',
    alignContent:   'center',
    alignItems:     'center',
    borderRadius:   '5px',
    marginBottom:   theme.spacing(5)
  }
}));

const ValidateInfo = ({
  checkTermlyResult,
  checkCumulativeResult,
  classList,
  termOpts,
  displayAlert,
  isLoading
}) => {
  const { formControl, invalidYear, callout } = useStyles();
  const [formValues, setFormValues] = useState({
    examYear:       new Date(),
    examYearError:  false,
    examTerm:       '',
    examTermError:  false,
    examClass:      '',
    examClassError: false,
    id:             'SBIS/2021/UNfve2',
    idError:        false,
    isTermlyResult: true
  });

  const handleChange = (prop) => (e) => {
    setFormValues(prevValues => ({ ...prevValues, [prop]: prop === 'examYear' ? new Date(e) : e.target.value }));
  };

  // Validates input before submit
  const validateFormValues = () => {
    const { examYear, examTerm, examClass, id } = formValues;
    setFormValues(prevValues => ({
      ...prevValues,
      examYearError:  false,
      examTermError:  false,
      examClassError: false,
      idError:        false
    }));

    // id format is "SBIS/2021/UNfve2"
    if (isTermlyResult && !((id && validator.matches(id, /^SBIS\/\b\d{4}\b\/\b[A-Z0-9]{6}\b$/i)) && examYear && examTerm && examClass)) {
      setFormValues(prevValues => ({
        ...prevValues,
        idError:        true,
        examYearError:  true,
        examTermError:  true,
        examClassError: true
      }));
      return false;
    } else if (!isTermlyResult && !((id && validator.matches(id, /^SBIS\/\b\d{4}\b\/\b[A-Z0-9]{6}\b$/i)) && examYear && examClass)) {
      setFormValues(prevValues => ({
        ...prevValues,
        idError:        true,
        examYearError:  true,
        examClassError: true
      }));
      return false;
    } else  return true; // return true when all fields validates
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { examYear, examTerm, examClass, id, isTermlyResult } = formValues;
    if (validateFormValues() && isTermlyResult) {
      displayAlert('success', 'Processing request...');
      checkTermlyResult({
        examYear: new Date(examYear).getFullYear(),
        examTerm,
        examClass,
        id
      });
      return true;
    } else if (validateFormValues() && !isTermlyResult) {
      displayAlert('success', 'Processing request...');
      checkCumulativeResult({
        examYear: new Date(examYear).getFullYear(),
        examClass,
        id
      });
      return true;
    }
    displayAlert('error', 'Error: can not proceed, all field are required!');
    return false;
  };

  const {
    examYear,
    examTerm,
    examClass,
    id,
    examYearError,
    examTermError,
    examClassError,
    idError,
    isTermlyResult
  } = formValues;

  // Get search params, will be sent together with form values
  /* eslint-disable */
  const query = useQuery();
  const pin = query.get('pin');
  const serial = query.get('serial');
  /* eslint-enable */
  return (
    <Grid item xs={12} sm={6}>
      <form noValidate onSubmit={handleSubmit}>
        <Grid item xs={12} className={callout}>
          <FormControl variant="outlined">
            <CustomizedSwitches
              iosStyle={true}
              startLabel="Cumulative Result"
              endLabel="Termly Result"
              isTermly={isTermlyResult}
              onChange={() => setFormValues({
                ...formValues,
                isTermlyResult: !isTermlyResult
              })}
            />
          </FormControl>
        </Grid>
        <FormControl className={formControl}>
          <TextField
            error={idError}
            label="Student ID"
            id="id"
            name="id"
            variant="outlined"
            autoComplete="off"
            value={id}
            onChange={handleChange('id')}
            helperText="Should be in this format: SBIS/2021/12jHO2"
          />
        </FormControl>
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
            {classList.map((value, idx) => (
              <MenuItem
                key={value}
                value={value}
                disabled={idx === 0}
              >
                {value.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {isTermlyResult && <FormControl variant="outlined" className={formControl} error={examTermError}>
          <InputLabel id="examTerm">Term</InputLabel>
          <Select
            labelId="examTerm"
            id="examTerm"
            value={examTerm}
            name="examTerm"
            onChange={handleChange('examTerm')}
            label="Term"
          >
            {termOpts.map((value, idx) => (
              <MenuItem
                key={value}
                value={value}
                disabled={idx === 0}
              >{value.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>}
        <FormControl className={formControl}>
          <KeyboardDatePicker
            error={examYearError}
            views={[ 'year' ]}
            label='Exam Year'
            value={examYear}
            onChange={handleChange('examYear')}
            inputVariant='outlined'
            variant='dialog'
            // className={formControl}
            autoOk={true}
            orientation='landscape'
            animateYearScrolling={true}
            minDate={'2020-01-01'}
            maxDate={new Date()}
            minDateMessage={<Message cls={invalidYear}
              msg='Please use the icon at the right to select valid year'
            />}
            maxDateMessage={<Message cls={invalidYear}
              msg='Year can be greater than current year, click the icon at the right to select valid year'
            />
            }
          />
        </FormControl>
        <Button
          variant= 'outlined'
          type=   'submit'
          color=   'primary'
          size='large'
          disabled={isLoading}
        >
          Check Result
        </Button>
      </form>
    </Grid>
  );
};

function Message({ msg, cls }) {
  return (
    <Typography className={cls}>
      {msg || 'Hey! Please use the icon to select valid year'}
    </Typography>
  );
}

const mapState = ({ staff, result }) => ({
  classList: staff.classList,
  termOpts:  staff.terms,
  isLoading: result.isLoading
});


/* eslint-disable no-console*/
const mapDispatch = (dispatch) => ({
  checkTermlyResult:     (payload) => dispatch(checkTermlyResult(payload)),
  checkCumulativeResult: (payload) => dispatch(checkCumulativeResult(payload)),
  displayAlert:          (sev, msg) => dispatch(actions.showAlert({
    severity: sev,
    message:  msg
  }))
});
/* eslint-enable no-console */

export default connect(mapState, mapDispatch)(ValidateInfo);
