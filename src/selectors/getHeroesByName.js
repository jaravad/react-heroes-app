import { heroes } from '../data/heroes';

export const getHeroesByName = (name) => {
  name = name.toLowerCase().trim();

  if (!name) {
    return [];
  }
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().trim().includes(name)
  );
};
