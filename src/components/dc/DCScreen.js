import { useMemo } from 'react';
import { HeroesList } from '../heroes/HeroesList';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const DCScreen = () => {
  const heroes = useMemo(() => getHeroesByPublisher('DC Comics'), []);

  return (
    <div className="fade-anim">
      <h1>DC Screen</h1>
      <HeroesList heroes={heroes} />
    </div>
  );
};
