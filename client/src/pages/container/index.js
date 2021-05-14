import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Wrapper from '../../components/container';
import {
  Overview,
  Registration,
  ResultEntry,
  Students
} from '../staff';
import NotFound from '../404';
import {adminLinks} from '../../request/links';

const Container = () => {
  return (
    <Wrapper links={adminLinks}>
      <Switch>
        <Route path={'/dashboard'} exact component={Overview} />
        <Route path='/dashboard/register' component={Registration} />
        <Route path='/dashboard/result-entry' component={ResultEntry} />
        <Route path='/dashboard/students' component={Students} />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  );
};

const mapState = ({router}) => ({
  pathname: router.location.pathname,
  search:   router.location.search,
  hash:     router.location.hash
});

export default connect(mapState)(Container);