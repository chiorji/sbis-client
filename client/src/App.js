import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Academics from './pages/academics';
import Gallery from './pages/gallery';
import Portal from './pages/portal';
import NotFound from './pages/404';

const App = () => {
  return (
    <Switch>
      <Layout>
        <Route path='/' exact component={Home} />
        <Route path='/academics' component={Academics} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/portal" component={Portal} />
      </Layout>
      <Route component={NotFound}/>
    </Switch>
  );
};

export default App;
