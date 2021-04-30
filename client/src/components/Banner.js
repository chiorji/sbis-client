import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Banner = () => {
  return (
    <Container maxWidth="lg" style={{backgroundColor: '#cfe8fc', minHeight: '70vh'}}>
      <Typography component="h1">Banner</Typography>
    </Container>
  );
};

export default Banner;
