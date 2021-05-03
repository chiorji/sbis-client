import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import StaffList from './StaffList';
import {listing} from './listing';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    paddingTop:      theme.spacing(8),
    paddingBottom:   theme.spacing(12),
    borderTop:       `1px solid ${theme.palette.grey[300]}`
  },
  heading: {
    textAlign:    'center',
    marginTop:    theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

const Staff = () => {
  const {root, heading} = useStyles();
  return (
    <Box className={root}>
      <Container>
        <Typography variant="h4" className={heading}>Meet Our Administrators</Typography>
        <Grid container spacing={3}>
          {listing.map(staff => (
            <StaffList {...staff} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Staff;
