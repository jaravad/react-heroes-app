import { Redirect, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroesByPublisher } from '../components/heroes/HeroesByPublisher';

export const AuthenticatedRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container py-4">
        <Switch>
          <Route
            exact
            path="/marvel"
            component={() => <HeroesByPublisher publisher="Marvel Comics" />}
          />
          <Route
            exact
            path="/dc"
            component={() => <HeroesByPublisher publisher="DC Comics" />}
          />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
