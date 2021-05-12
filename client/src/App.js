import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Layout from './layout';
import Home from './pages/home';
import Academics from './pages/academics';
import Gallery from './pages/gallery';
import Result from './pages/result';
import NotFound from './pages/404';
import Login from './pages/staff';
import Dashboard from './pages/staff/dashboard';

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/academics' component={Academics} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/result" component={Result} />
        <Route path="/staff/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Layout>
      <Route component={NotFound}/>
    </Switch>
  );
};

export default App;
