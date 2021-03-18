import { heroes } from '../data/heroes';

export const getHeroesByName = (name) => {
  if (!name) {
    return [];
  }
  name = name.toLowerCase().replace(/ /g, '');
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().replace(/ /g, '').includes(name)
  );
};
