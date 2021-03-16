import { HeroesList } from '../heroes/HeroesList';

export const DCScreen = () => {
  return (
    <div className="fade-anim">
      <h1>DC Screen</h1>
      <HeroesList publisher="DC Comics" />
    </div>
  );
};
