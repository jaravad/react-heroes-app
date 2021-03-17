import { heroes } from '../data/heroes';

export const getHeroesByName = (name) => {
  if (!name) {
    return [];
  }
  name = name.toLowerCase().trim();
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().trim().includes(name)
  );
};
