export const HeroInfo = ({
  className,
  showMore,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <article className={className}>
      <h3>{superhero}</h3>

      <span
        className={`badge ${
          publisher === 'DC Comics' ? 'bg-primary' : 'bg-danger'
        } rounded-pill mb-2`}
      >
        {publisher}
      </span>

      <p className="small lh-sm text-muted mb-2">Also known as {alter_ego}</p>

      {(alter_ego !== characters || !showMore) && (
        <p className="lh-sm">
          Also has appeared as <em>{characters}</em>
        </p>
      )}

      <div className="alert alert-light border small" role="alert">
        First appeared on: <br />
        <span className="fw-medium">'{first_appearance}'</span>
      </div>

      {showMore && (
        <span className="see-more fw-medium d-inline-block">See more</span>
      )}
    </article>
  );
};
