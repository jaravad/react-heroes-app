import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

/* 
  This component returns a Route component that renders
  the passed @param component if user is authenticated otherwise
  a Redirect component is rendered to navigate to /login
*/

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
