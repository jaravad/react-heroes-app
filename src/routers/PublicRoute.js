import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...routeProps} />
      }
    />
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
