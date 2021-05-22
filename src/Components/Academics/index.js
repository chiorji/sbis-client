import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from './Accordion';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:    theme.spacing(5),
    marginBottom: theme.spacing(5)
  }
}));

const Academics = () => {
  const { root } = useStyles();
  return (
    <>
      <Box className={root}>
        <Container>
          <Typography variant="h4">Academics</Typography>
        </Container>
        <Container>
          <Accordion />
        </Container>
      </Box>
    </>
  );
};

export default Academics;
