import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Landing from './pages/landing';
import Container from './pages/container';

const App = () => {
  return (
    <Switch>
      <PrivateRoute path="/dashboard/" component={Container} />
      <Route path='/'  component={Landing} />
    </Switch>
  );
};

export default App;
