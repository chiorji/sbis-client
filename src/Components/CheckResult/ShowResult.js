import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  printArea: {
    border: `1px solid ${theme.palette.primary.main}`
  }
}));

const ShowResult = () => {
  const { printArea } = useStyles();
  return (
    <Grid item xs={12} sm={10} className={printArea}>
      <Typography variant="h4" className={printArea}>Result</Typography>
    </Grid>
  );
};

export default ShowResult;
