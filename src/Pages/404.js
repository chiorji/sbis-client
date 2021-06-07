import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    position:        'fixed',
    inset:           0,
    textAlign:       'center',
    display:         'flex',
    alignContent:    'center',
    backgroundColor: theme.palette.grey[ 200 ],
    justifyContent:  'center',
    flexDirection:   'column'
  },
  errorIcon: {
    fontSize: '5ch'
  }
}));

const NotFound = () => {
  const history = useHistory();
  const { container, errorIcon } = useStyles();
  return (
    <Container className={container} maxWidth="xl">
      <Typography variant="h4" component="h2">
        <ErrorOutlineIcon
          fill="currentColor"
          className={errorIcon}
        />
      </Typography>
      <Typography component="h4">
        Seems you have hit an unexisted route <Button
          variant="text"
          onClick={() => history.goBack()}
        >Go back</Button>
      </Typography>
    </Container>
  );
};

export default NotFound;
