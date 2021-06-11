import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Publish from '../../Components/AdminResults/Publish';
import NewEntry from '../../Components/AdminResults/NewEntry';
import ScratchCard from '../../Components/AdminResults/ScratchCard';
import NotFound from '../../Pages/404';

const Results = () => {
  const match = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route path={match.path} exact component={NewEntry} />
        <Route path={`${match.path}/publish`} component={Publish} />
        <Route path={`${match.path}/pin`} component={ScratchCard} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};



export default Results;
