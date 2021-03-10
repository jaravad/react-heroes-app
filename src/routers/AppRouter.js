import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="container py-3">
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/" component={MarvelScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
