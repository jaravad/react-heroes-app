import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={AuthenticatedRoutes} />
      </Switch>
    </Router>
  );
};
