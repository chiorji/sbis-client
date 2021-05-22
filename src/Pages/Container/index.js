import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Wrapper from '../../Components/Container';
import Alert from '../../Components/Alert';
import {
  Overview,
  Admission,
  Results,
  Students,
  StaffDetails,
  Subjects
} from '../Staff';
import NotFound from '../404';
import { adminLinks } from '../../request/links';

const Container = ({ alert }) => {
  return (
    <Wrapper links={adminLinks}>
      {alert.shouldOpen &&
        <Alert
          openAlert={alert.shouldOpen}
          msg={alert.message}
          severity={alert.severity}
        />}
      <Switch>
        <Route path={'/dashboard'} exact component={Overview} />
        <Route path='/dashboard/register' component={Admission} />
        <Route path='/dashboard/results' component={Results} />
        <Route path='/dashboard/students' component={Students} />
        <Route path='/dashboard/staff/' component={StaffDetails} />
        <Route path='/dashboard/subjects' component={Subjects} />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  );
};

const mapState = ({ staff }) => ({
  alert: staff.alert
});

export default connect(mapState)(Container);
