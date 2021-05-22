import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Landing from './Pages/Landing';
import Container from './Pages/Container';

const App = () => {
  return (
    <Switch>
      <PrivateRoute path="/dashboard/" component={Container} />
      <Route path='/'  component={Landing} />
    </Switch>
  );
};

export default App;
