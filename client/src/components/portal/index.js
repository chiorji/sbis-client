import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import PinAndIdForm from './PinAndIdForm';
import DataForm from './DataForm';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:    theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign:    'center'
  },
  grid: {
    justifyContent:                 'center',
    marginTop:                      theme.spacing(3),
    marginBottom:                   theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    }
  }
}));

const Portal = ({isValidPin, isValidName, isResultReady}) => {
  const {root, grid} = useStyles();

  /* eslint-disable no-console */
  useEffect(() => {
    console.log({isValidPin, isValidName, isResultReady});
  }, [isValidName, isValidPin, isResultReady]);

  // check if pin/name validation was success
  // pin/name must be validated to render the next form
  const validated = () => isValidPin && isValidName;

  return (
    <>
      <Container className={root}>
        <Typography variant="h4">Check Result</Typography>
      </Container>
      <Container>
        <Grid container className={grid} spacing={4}>
          {!validated() && !isResultReady
            ? <PinAndIdForm />
            : validated() && !isResultReady
              ? <DataForm />
              : isResultReady
                ? <Typography variant="h6">Loading result...</Typography>
                : <Typography variant="div" />}
        </Grid>
      </Container>
    </>
  );
};

const mapState = ({checker}) => ({
  isValidPin:    checker.pinValidated,
  isValidName:   checker.nameValidated,
  isResultReady: checker.resultReady
});

export default connect(mapState, null)(Portal);
