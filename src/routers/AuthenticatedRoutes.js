import { Redirect, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DCScreen } from '../components/dc/DCScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';

export const AuthenticatedRoutes = () => {
  return (
    <>
      <NavBar />

      <div className="container py-4">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};