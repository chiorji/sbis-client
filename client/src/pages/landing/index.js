import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from '../../components/layout';
import Home from '../home';
import Academics from '../academics';
import Gallery from '../gallery';
import Result from '../result';
import NotFound from '../404';
import Login from '../staff/Login';
import {links} from '../../request/links';

const Landing = ({isLoggedIn}) => {
  return isLoggedIn ? <Redirect to="/dashboard" />
    : <Layout links={links}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/academics' component={Academics} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/result" component={Result} />
        <Route path="/login" component={Login} />
        <Route component={NotFound}/>
      </Switch>
    </Layout>;
};

const mapState = ({staff}) => ({
  isLoggedIn: staff.isLoggedIn
});

export default connect(mapState)(Landing);
