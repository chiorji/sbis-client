import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PinSerialForm from './ValidatePin';
import ValidateInfo from './ValidateInfo';
import Alert from '../../Components/Alert';
import { useQuery } from '../../utils';

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
  },
  errorBox: {
    textAlign: 'center'
  }
}));

const Portal = ({ alert, hideAlert }) => {
  const { root, grid, errorBox } = useStyles();

  const query = useQuery();
  const pin = query.get('pin');
  const serial = query.get('serial');


  return (
    <>
      {alert.shouldOpen &&
        <Alert
          openAlert={alert.shouldOpen}
          msg={alert.message}
          severity={alert.severity}
          handleClose={hideAlert}
        />}
      <Container className={root}>
        <Typography variant="h4">Check Result</Typography>
      </Container>
      <Container>
        <Grid container className={grid} spacing={4}>
          {query.get('page') === 'validated' && (pin && serial)
            ? <ValidateInfo />
            : query.get('page') === 'display'
              ? <Typography variant="h6">Loading result...</Typography>
              : query.get('page') === 'validate'
                ? <PinSerialForm />
                : <Box width={1/3} className={errorBox}>
                  <Typography variant="h1">Oops!</Typography>
                  <Typography variant="body2">
                     You just hit the page because you screwed up
                  something. But dont worry we gat you, <Link to="/portal?page=validate">click here to start afresh.</Link>
                  </Typography>
                </Box>
          }
        </Grid>
      </Container>
    </>
  );
};

const mapState = ({ account, result }) => ({
  isLoggedIn: account.isLoggedIn,
  alert:      result.alert
});

const mapDispatch = (dispatch) => ({
  hideAlert: () => dispatch({ type: 'HIDE_ALERT' })
});

export default connect(mapState, mapDispatch)(Portal);
