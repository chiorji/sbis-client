import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Publish from '../../Components/AdminResults/Publish';
import NewEntry from '../../Components/AdminResults/NewEntry';
import ScratchCard from '../../Components/AdminResults/ScratchCard';
import NotFound from '../../Pages/404';

const Results = () => {
  return (
    <Container>
      <Switch>
        <Route path='/dashboard/results/entry' component={NewEntry} />
        <Route path='/dashboard/results/publish' component={Publish} />
        <Route path='/dashboard/results/pin' component={ScratchCard} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};



export default Results;
