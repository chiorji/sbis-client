import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isLoggedIn, ...rest}) => {
  return (
    <Route {...rest} render={(props) => (
      isLoggedIn
        ? <Component {...props} />
        : <Redirect to="/login"/>
    )}
    />
  );
};

const mapState = ({account}) => ({
  isLoggedIn: account.isLoggedIn
});

export default connect(mapState)(PrivateRoute);
