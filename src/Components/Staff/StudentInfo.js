/* eslint-disable no-unused-vars, no-console */
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { getStudent } from '../../store/staff/actions';

const useStyles = makeStyles(theme => ({
  personInfo: {
    display:                          'flex',
    justifyContent:                   'space-around',
    [ theme.breakpoints.down('sm') ]: {
      flexDirection:  'column',
      justifyContent: 'flex-start',
      alignItems:     'start'
    }
  }
}));

const StudentInfo = ({ person, getStudent }) => {
  const { id } = useParams();
  const { personInfo } = useStyles();

  useEffect(() => {
    console.log({ id });
    getStudent(id);
  }, [id, getStudent]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h5">Student Information</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h5">Basic information</Typography>
            <div className={personInfo}>
              <h6>Student Name: </h6>
              <p>
                {person.first_name.charAt(0).toUpperCase()} {' '}
                {person.middle_name
                && person.middle_name.charAt(0).toUpperCase()} {' '}
                {person.last_name.charAt(0).toUpperCase()} {' '}
              </p>
            </div>
            <div className={personInfo}>
              <h6>Date Of Birth: </h6>
              <p>
                {person.dob}
              </p>
            </div>
            <div className={personInfo}>
              <h6>Gender: </h6>
              <p>
                {person.gender}
              </p>
            </div>
            <div className={personInfo}>
              <h6>Class of Admission: </h6>
              <p>
                {person.registered_class}
              </p>
            </div>
            <div className={personInfo}>
              <h6>Current Class: </h6>
              <p>
                {person.current_class}
              </p>
            </div>
            <div className={personInfo}>
              <h6>Tracking ID: </h6>
              <p>
                {person.id}
              </p>
            </div>
            <div className={personInfo}>
              <h6>Date of Registration: </h6>
              <p>
                {person.created_at}
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Paper>
          <Typography variant="h5">Guardian information</Typography>
          <div className={personInfo}>
            <h6>Guardian Name: </h6>
            <p>
              {person.guardian_name}
            </p>
          </div>
          <div className={personInfo}>
            <h6>Guardian Home Address: </h6>
            <p>
              {person.guardian_home_address}
            </p>
          </div>
          <div className={personInfo}>
            <h6>Guardian Contact Phone Number: </h6>
            <p>
              {person.guardian_phone_number}
            </p>
          </div>
          <div className={personInfo}>
            <h6>Guardian Nationality: </h6>
            <p>
              {person.guardian_nationality}
            </p>
          </div>
          <div className={personInfo}>
            <h6>Guardian Gender: </h6>
            <p>
              {person.guardian_gender}
            </p>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Paper>
          <Typography variant="h5">Geographical information</Typography>
          <div className={personInfo}>
            <h6>State of Origin: </h6>
            <p>
              {person.state_of_origin}
            </p>
          </div>
          <div className={personInfo}>
            <h6>Local Government of Origin: </h6>
            <p>
              {person.local_govt_of_origin}
            </p>
          </div>
          <div className={personInfo}>
            <h6>Nationality: </h6>
            <p>
              {person.nationality}
            </p>
          </div>
        </Paper>
      </Grid>
    </Container>
  );
};

const mapState = ({ staff }) => ({
  person: staff.studentInfo
});

const mapDispatch = (dispatch) => ({
  getStudent: (payload) => dispatch(getStudent(payload))
});

export default connect(mapState, mapDispatch)(StudentInfo);
