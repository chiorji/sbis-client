import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../Components/Layout';
import Home from '../Home';
import Academics from '../Academics';
import Gallery from '../Gallery';
import Result from '../Result';
import NotFound from '../404';
import { Login } from '../Staff';
import { links } from '../../request/links';

const Landing = ({ isLoggedIn }) => {
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

const mapState = ({ account }) => ({
  isLoggedIn: account.isLoggedIn
});

export default connect(mapState)(Landing);
