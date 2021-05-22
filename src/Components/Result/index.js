import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PinSerialForm from './PinSerialForm';
import DataForm from './DataForm';
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

const Portal = () => {
  const { root, grid, errorBox } = useStyles();
  const query = useQuery();

  return (
    <>
      <Container className={root}>
        <Typography variant="h4">Check Result</Typography>
      </Container>
      <Container>
        <Grid container className={grid} spacing={4}>
          {query.get('page') === 'validated' && (query.get('pin') && query.get('regno'))
            ? <DataForm />
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



export default connect()(Portal);
