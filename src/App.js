import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const PrivateRoute = loadable(() => import('./Components/PrivateRoute'));
const Landing = loadable(() => import('./Pages/Landing'));
const Container = loadable(() => import('./Pages/Container'));

const App = () => {
  return (
    <Switch>
      <PrivateRoute path="/dashboard/" component={Container} />
      <Route path='/'  component={Landing} />
    </Switch>
  );
};

export default App;
