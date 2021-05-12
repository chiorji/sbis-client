import React from 'react';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
  return (
    <Container>
      <Typography component="h2">
          Seems you have hit an unexisted route <Link to="/">Go back</Link>
      </Typography>
    </Container>
  );
};

export default NotFound;
