import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AddStaffForm from '../../components/staff/AddStaffForm';
import StaffListing from '../../components/staff/StaffListing';
import Alert from '../../components/Alert';

const StaffDetails = ({pathname, search, alert, hideAlert}) => {
  return (
    <Grid item xs={12}>
      {alert.shouldOpen && <Alert
        openAlert={alert.shouldOpen}
        handleClose={hideAlert}
        msg={alert.message}
        severity={alert.severity}
      />}
      <Switch>
        <Route path='/dashboard/staff/details/add' component={AddStaffForm} />
        <Route path='/dashboard/staff/details' component={StaffListing} />
      </Switch>
    </Grid>
  );
};

const mapState = ({router, staff}) => ({
  pathname: router.location.pathname,
  search:   router.location.search,
  alert:    staff.alert
});

const mapDispatch = (dispatch) => ({
  hideAlert: () => dispatch({type: 'HIDE_ALERT'})
});

export default connect(mapState, mapDispatch)(StaffDetails);
