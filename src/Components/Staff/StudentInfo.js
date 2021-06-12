/* eslint-disable no-console */
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getStudent } from '../../store/staff/actions';
import { useQuery } from '../../utils';

const StudentInfo = ({ info, getStudent }) => {
  const id = useQuery().get('id');
  const getInfo = useCallback((id) => getStudent(id), [getStudent]);

  useEffect(() => {
    getInfo(id);
    console.log({ id });
  }, []);

  return (
    info ? (<Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">Student Info</Typography>
          {info && <Paper>
            <Typography variant="h6">
              {
                info.first_name.charAt(0).toUpperCase() +
                info.first_name.substring(1)
              }
            </Typography>
          </Paper>}
        </Grid>
      </Grid>

      <Typography variant="h4">Guardian Info</Typography>
    </Container>) : <div />
  );
};

const mapState = ({ staff }) => ({
  info: staff.studentInfo
});

const mapDispatch = (dispatch) => ({
  getStudent: (payload) => dispatch(getStudent(payload))
});

export default connect(mapState, mapDispatch)(StudentInfo);
