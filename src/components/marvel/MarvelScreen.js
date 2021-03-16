import { HeroesList } from '../heroes/HeroesList';

export const MarvelScreen = () => {
  return (
    <div className="fade-anim">
      <h1>MarvelScreen</h1>
      <HeroesList publisher="Marvel Comics" />
    </div>
  );
};
