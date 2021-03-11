import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div
      className="row"
      data-masonry={JSON.stringify({ percentPosition: true })}
    >
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
