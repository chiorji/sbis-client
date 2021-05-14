import React from 'react';
import {connect} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop:    theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  paper: {
    minHeight:      '25ch',
    textAlign:      'center',
    display:        'flex',
    flexDirection:  'column',
    justifyContent: 'center',
    padding:        theme.spacing(1),
    '&:hover':      {
      backgroundColor: theme.palette.primary.light,
      color:           theme.palette.grey[300]
    }
  }
}));

const Overview = ({users, subjects, classes, results, staff}) => {
  const {grid, gridItem, paper} = useStyles();
  return (
    <section>
      <Typography variant="h4">Overview</Typography>
      <Grid container spacing={3} className={grid}>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{users}</Typography>
            <Typography paragraph>Total number of registered
            students</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{subjects}</Typography>
            <Typography paragraph>Total number of subject offered</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{classes}</Typography>
            <Typography paragraph>Total number of class</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{results}</Typography>
            <Typography paragraph>Total number of results decalred</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{staff}</Typography>
            <Typography paragraph>Total number of active staff</Typography>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

const mapState = ({staff}) => ({
  users:    staff.stats.totalRegStudents,
  subjects: staff.stats.totalSubjects,
  classes:  staff.stats.totalClassListed,
  results:  staff.stats.totalResultsDeclared,
  staff:    staff.stats.activeStaff
});

export default connect(mapState)(Overview);
