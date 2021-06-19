/* eslint-disable no-unused-vars, no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
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
import { makeStyles } from '@material-ui/styles';
import CustomizedSwitches from '../Switch';
import CumulativeResult from './CumulativeResult';
import TermlyResult from './TermlyResult';

const useStyles = makeStyles(theme => ({
  infoRoot: {
    display:       'flex',
    flexDirection: 'row',
    alignItems:    'center'
  },

  candidateInfo: {
    display:        'flex',
    flexDirection:  'row',
    justifyContent: 'space-between'
  },
  formControl: {
    margin:                         theme.spacing(1),
    flexGrow:                       1,
    minWidth:                       300,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

const NewEntry = ({ subjectList, classList, terms }) => {
  const { infoRoot, candidateInfo, formControl } = useStyles();

  // Student information
  const [basicInfo, setBasicInfo] = useState({
    id:               '',
    idError:          false,
    classResult:      '',
    classResultError: false,
    isTermly:         true
  });

  const { id, idError, classResult, isTermly, classResultError } = basicInfo;

  const handleBasicInfoChange = (props) => (e) => {
    setBasicInfo(prevState => ({ ...prevState, [props]: e.target.value }));
  };

  return (
    <>
      <Typography variant="h5">{isTermly ? 'Termly Result' : 'Cumulative Result'}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} className={candidateInfo}>
          <FormGroup row={true} className={infoRoot}>
            <FormControl className={formControl}>
              <TextField
                error={idError}
                label="Student ID"
                id="id"
                name="id"
                variant="outlined"
                autoComplete="off"
                value={id}
                onChange={handleBasicInfoChange('id')}
                size="small"
              />
            </FormControl>
            <FormControl variant="outlined" size="small" className={formControl} error={classResultError}>
              <InputLabel id="classResult">Student Class</InputLabel>
              <Select
                labelId="classResult"
                id="classResult"
                value={classResult}
                name="classResult"
                onChange={handleBasicInfoChange('classResult')}
                label="Student Class"
              >
                {terms.map((value, idx) => (
                  <MenuItem
                    key={value}
                    value={value.toLowerCase()}
                    disabled={idx === 0}
                  >{value}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={formControl}>
              <CustomizedSwitches
                iosStyle={true}
                startLabel="Cumulative Result"
                endLabel="Termly Result"
                isTermly={isTermly}
                onChange={() => setBasicInfo(prevState => ({
                  ...prevState, isTermly: !isTermly
                }))}
              />
            </FormControl>
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          {!isTermly ? <CumulativeResult /> : <TermlyResult />}
        </Grid>
      </Grid>
    </>
  );
};

const mapState = ({ staff }) => ({
  subjectList: staff.subjectList,
  classList:   staff.classList,
  terms:       staff.terms
});

export default connect(mapState)(NewEntry);
