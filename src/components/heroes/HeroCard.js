import { Link } from 'react-router-dom';
import { HeroInfo } from './HeroInfo';

export const HeroCard = ({ hero }) => {
  return (
    <div className="col-md-6 col-xl-4 p-3">
      <Link
        to={`/hero/${hero.id}`}
        className="row g-0 border rounded overflow-hidden shadow-sm hero-card"
      >
        <div className="col-5 position-relative">
          <div className="img-overlay w-100 h-100 position-absolute"></div>
          <img
            src={`./assets/${hero.id}.jpg`}
            className="object-fit-cover w-100 h-100 position-absolute"
            alt={hero.superhero}
          />
        </div>
        {/* TODO turn the following code into a component */}
        <HeroInfo {...hero} className="px-3 py-4 col-7" showMore />
      </Link>
    </div>
  );
};
