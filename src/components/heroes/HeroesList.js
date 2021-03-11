import { useRef, useLayoutEffect } from 'react';

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import Masonry from 'masonry-layout';

export const HeroesList = ({ publisher }) => {
  const ref = useRef(null);
  const heroes = getHeroesByPublisher(publisher);

  // initialize masonry layout
  useLayoutEffect(() => {
    new Masonry(ref.current, {
      // options
      percentPosition: true,
    });
  }, []);

  return (
    <div id="masonryGrid" className="row" ref={ref}>
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
