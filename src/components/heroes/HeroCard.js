import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col-md-6 col-xl-4 p-3">
      <Link
        to={`/hero/${id}`}
        className="row g-0 border rounded overflow-hidden shadow-sm hero-card"
      >
        <div className="col-5 position-relative">
          <div className="img-overlay w-100 h-100 position-absolute"></div>
          <img
            src={`./assets/${id}.jpg`}
            className="object-fit-cover w-100 h-100 position-absolute"
            alt={superhero}
          />
        </div>
        <article className="px-3 py-4 col-7">
          <h5 className="mb-1">{superhero}</h5>

          <span
            className={`badge ${
              publisher === 'DC Comics' ? 'bg-primary' : 'bg-danger'
            } rounded-pill mb-2`}
          >
            {publisher}
          </span>

          {alter_ego !== characters && (
            <p className="small lh-sm text-muted mb-2">
              Also known as {alter_ego}
            </p>
          )}

          <p className="lh-sm">
            Also has appeared as <em>{characters}</em>
          </p>

          <div className="alert alert-light border small" role="alert">
            First appeared on: <br />
            <span className="fw-medium">'{first_appearance}'</span>
          </div>

          <span className="see-more fw-medium d-inline-block">See more</span>
        </article>
      </Link>
    </div>
  );
};
