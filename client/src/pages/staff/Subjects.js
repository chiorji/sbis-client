import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SubjectsList from '../../components/Subjects/SubjectsList';
import CreateSubject from '../../components/Subjects/CreateSubject';

const Subjects = () => {
  return (
    <Container>
      <Switch>
        <Route path='/dashboard/subjects/create' component={CreateSubject} />
        <Route path='/dashboard/subjects' component={SubjectsList} />
      </Switch>
    </Container>
  );
};

export default Subjects;
