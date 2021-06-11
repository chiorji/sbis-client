import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SubjectsList from '../../Components/Subjects/SubjectsList';
import CreateSubject from '../../Components/Subjects/CreateSubject';
import NotFound from '../../Pages/404';

const Subjects = () => {
  const match = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route path={match.path} exact component={SubjectsList} />
        <Route path={`${match.path}/new`} component={CreateSubject} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Subjects;
