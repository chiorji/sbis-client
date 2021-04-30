import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
