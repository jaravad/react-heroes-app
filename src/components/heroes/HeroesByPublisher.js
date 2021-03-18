import { useMemo } from 'react';
import { HeroesList } from '../heroes/HeroesList';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroesByPublisher = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="fade-anim">
      <h1 className="pb-2 border-bottom">{publisher}</h1>
      <HeroesList heroes={heroes} />
    </div>
  );
};
