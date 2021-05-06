/* eslint-disable no-unused-vars */
import React, {useRef} from 'react';
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

const Portal = () => {
  const {root, grid} = useStyles();
  const step = useRef(1);
  return (
    <>
      <Container className={root}>
        <Typography variant="h4">Check Result</Typography>
      </Container>
      <Container>
        <Grid container className={grid} spacing={4}>
          {step.current === 0 ?
            <PinAndIdForm />
            : step.current === 1 ? <DataForm /> : <div />}
        </Grid>
      </Container>
    </>
  );
};

export default Portal;
