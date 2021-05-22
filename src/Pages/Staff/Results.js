import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Publish from '../../Components/AdminResults/Publish';
import NewEntry from '../../Components/AdminResults/NewEntry';

const Results = () => {
  return (
    <Container>
      <Switch>
        <Route path='/dashboard/results/entry' component={NewEntry} />
        <Route path='/dashboard/results/publish' component={Publish} />
      </Switch>
    </Container>
  );
};



export default Results;
