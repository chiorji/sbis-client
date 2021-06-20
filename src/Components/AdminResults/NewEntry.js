/* eslint-disable no-unused-vars, no-console */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import TermlyResult from './TermlyResult';
import CumulativeResult from './CumulativeResult';
import CustomizedSwitches from '../Switch';

const useStyles = makeStyles(theme => ({
  callout: {
    display:         'flex',
    flexDirection:   'row',
    justifyContent:  'space-between',
    borderRadius:    '5px',
    backgroundColor: theme.palette.grey[ 200 ],
    marginBottom:    theme.spacing(5)
  },
  formControl: {
    margin:                         theme.spacing(1),
    minWidth:                       200,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

const NewEntry = ({ subjectList }) => {
  const { callout, formControl } = useStyles();
  const [ isTermly, setIsTermly ] = useState(true);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={callout}>
        <Typography variant="h6" component="h5">
          Please toggle the switch to select the result type
        </Typography>
        <FormControl variant="outlined" className={formControl}>
          <CustomizedSwitches
            iosStyle={true}
            startLabel="Cumulative Result"
            endLabel="Termly Result"
            isTermly={isTermly}
            onChange={() => setIsTermly(!isTermly)}
          />
        </FormControl>
      </Grid>
      {isTermly ? <TermlyResult /> : <CumulativeResult />}
    </Grid>
  );
};

const mapState = ({ staff }) => ({
  subjectList: staff.subjectList,
  classList:   staff.classList,
  terms:       staff.terms
});

export default connect(mapState)(NewEntry);
