import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StudentsTable from '../../Components/Staff/StudentsTable';
import makeStyles from '@material-ui/styles/makeStyles';
import { fetchAllStudents } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(5)
  },
  header: {
    marginBottom: theme.spacing(3)
  }
}));

const Students = ({ fetchAllStudents }) => {
  const { root, header } = useStyles();

  useEffect(() => {
    fetchAllStudents();
  }, [fetchAllStudents]);

  return (
    <Grid container spacing={2} className={root}>
      <Grid item xs={12}>
        <Typography variant="h4" component="header" className={header}>
        Students</Typography>
      </Grid>
      <Grid item xs={12}>
        <StudentsTable />
      </Grid>
    </Grid>
  );
};

const mapDispatch = (dispatch) => ({
  fetchAllStudents: () => dispatch(fetchAllStudents())
});

export default connect(null, mapDispatch)(Students);
