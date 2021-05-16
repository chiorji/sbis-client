import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AddStaffForm from '../../components/staff/AddStaffForm';
import StaffListing from '../../components/staff/StaffListing';


const StaffDetails = ({pathname, search}) => {
  return (
    <Grid item xs={12}>
      <Switch>
        <Route path='/dashboard/staff/details/add' component={AddStaffForm} />
        <Route path='/dashboard/staff/details' component={StaffListing} />
      </Switch>
    </Grid>
  );
};

const mapState = ({router}) => ({
  pathname: router.location.pathname,
  search:   router.location.search
});

export default connect(mapState)(StaffDetails);
