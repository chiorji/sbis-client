import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Wrapper from '../../components/container';
import Overview from '../staff/Overview';
import NotFound from '../404';
import {adminLinks} from '../../request/links';

const Container = () => {
  const match = useRouteMatch();
  console.log({match}); // eslint-disable-line
  return (
    <Wrapper links={adminLinks}>
      <Switch>
        <Route path={`${match.path}/student-listing`} component={() => <p>{match.url}</p>} />
        <Route path={`${match.path}`} component={Overview} />
        <Route path={`${match.path}/*`} component={NotFound} />
      </Switch>
    </Wrapper>
  );
};

export default Container;
