import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/login/LoginScreen';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <PrivateRoute
          path="/"
          component={AuthenticatedRoutes}
          isAuthenticated={logged}
        />
      </Switch>
    </Router>
  );
};
