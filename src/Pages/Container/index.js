import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Wrapper from '../../Components/Container';
import Alert from '../../Components/Alert';
import {
  Overview,
  Results,
  Students,
  Staff,
  Subjects
} from '../Staff';
import NotFound from '../404';
import { adminLinks } from '../../request/links';

const Container = ({ alert, hideAlert }) => {
  return (
    <Wrapper links={adminLinks}>
      {alert.shouldOpen &&
        <Alert
          openAlert={alert.shouldOpen}
          msg={alert.message}
          severity={alert.severity}
          handleClose={hideAlert}
        />}
      <Switch>
        <Route path={'/dashboard'} exact component={Overview} />
        <Route path='/dashboard/results' component={Results} />
        <Route path='/dashboard/students' component={Students} />
        <Route path='/dashboard/staff' component={Staff} />
        <Route path='/dashboard/subjects' component={Subjects} />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  );
};

const mapState = ({ staff }) => ({
  alert: staff.alert
});

const mapDispatch = (dispatch) => ({
  hideAlert: () => dispatch({ type: 'HIDE_ALERT' })
});

export default connect(mapState, mapDispatch)(Container);
