import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import { getStats } from '../../store/staff/actions';

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
    transition:     'all, .4s ease-in-out',
    '&:hover':      {
      backgroundColor: theme.palette.primary.light,
      color:           theme.palette.grey[300]
    }
  }
}));

const Overview = ({ students, subjects, classes,
  results, staff, pins, getStats }) => {
  const { grid, gridItem, paper } = useStyles();

  useEffect(() => {
    getStats();
  }, [ getStats ]);

  return (
    <section>
      <Typography variant="h4">Overview</Typography>
      <Grid container spacing={3} className={grid}>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{students}</Typography>
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
            <Typography paragraph>Total number of results declared</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{staff}</Typography>
            <Typography paragraph>Total number of active staff</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={gridItem}>
          <Paper className={paper} variant="outlined">
            <Typography variant="h1" component="h6">{pins}</Typography>
            <Typography paragraph>
              Total number of scratch cards generated
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
};

const mapState = ({ staff }) => ({
  students: staff.stats.sum.students,
  subjects: staff.stats.sum.subjects,
  classes:  staff.stats.sum.classes,
  results:  staff.stats.sum.results,
  staff:    staff.stats.sum.staff,
  pins:     staff.stats.sum.pins
});

const mapDispatch = (dispatch) => ({
  getStats: () => dispatch(getStats())
});

export default connect(mapState, mapDispatch)(Overview);
