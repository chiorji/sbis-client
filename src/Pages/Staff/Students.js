import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import StudentsTable from '../../Components/Staff/StudentsTable';
import AdmissionForm from '../../Components/Staff/AdmissionForm';
import StudentInfo from '../../Components/Staff/StudentInfo';
import NotFound from '../../Pages/404';

const Students = () => {
  const match = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route path={match.path} exact component={StudentsTable} />
        <Route path={`${match.path}/admission`} component={AdmissionForm} />
        <Route path={`${match.path}/info`} component={StudentInfo} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Students;
