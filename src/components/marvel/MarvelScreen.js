import { useMemo } from 'react';
import { HeroesList } from '../heroes/HeroesList';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const MarvelScreen = () => {
  const heroes = useMemo(() => getHeroesByPublisher('Marvel Comics'), []);

  return (
    <div className="fade-anim">
      <h1>MarvelScreen</h1>
      <HeroesList heroes={heroes} />
    </div>
  );
};
