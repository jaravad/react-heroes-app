import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/login/LoginScreen';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={logged}
        />
        <PrivateRoute
          path="/"
          component={AuthenticatedRoutes}
          isAuthenticated={logged}
        />
      </Switch>
    </Router>
  );
};
