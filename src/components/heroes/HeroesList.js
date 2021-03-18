import { useRef, useLayoutEffect, memo } from 'react';

import { HeroCard } from './HeroCard';
import Masonry from 'masonry-layout';

export const HeroesList = memo(function HeroesList({ heroes }) {
  const ref = useRef(null);

  // initialize masonry layout
  useLayoutEffect(() => {
    new Masonry(ref.current, {
      // options
      percentPosition: true,
    });
  }, [heroes]);

  return (
    <div id="masonryGrid" className="row" ref={ref}>
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} hero={hero} />;
      })}
    </div>
  );
});
