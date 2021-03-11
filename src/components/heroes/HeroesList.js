import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
      {heroes.map((hero) => {
        return <li key={hero.id}>{hero.superhero}</li>;
      })}
    </ul>
  );
};
