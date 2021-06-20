/*eslint-disable no-unused-vars, no-console */
import React from 'react';
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
    minWidth:                       200,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

const CumulativeResult = () => {
  const { infoRoot, candidateInfo, formControl } = useStyles();

  return (
    <Typography variant="h6">Cumulative Result</Typography>
  );
};

export default CumulativeResult;
