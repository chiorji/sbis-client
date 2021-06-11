import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AddStaffForm from '../../Components/Staff/AddStaffForm';
import StaffListing from '../../Components/Staff/StaffListing';
import NotFound from '../../Pages/404';

const Staff = () => {
  const match = useRouteMatch();
  return (
    <Grid item xs={12}>
      <Switch>
        <Route path={match.path} exact component={StaffListing} />
        <Route path={`${match.path}/add`} component={AddStaffForm} />
        <Route component={NotFound} />
      </Switch>
    </Grid>
  );
};

const mapState = ({ router, staff }) => ({
  pathname: router.location.pathname,
  search:   router.location.search,
  alert:    staff.alert
});

const mapDispatch = (dispatch) => ({
  hideAlert: () => dispatch({ type: 'HIDE_ALERT' })
});

export default connect(mapState, mapDispatch)(Staff);
