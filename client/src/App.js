import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Academics from './pages/academics';
import Gallery from './pages/gallery';
import NotFound from './pages/404';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path='/' exact component={Home} />
          <Route path='/academics' component={Academics} />
          <Route path="/gallery" component={Gallery} />
        </Layout>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
