import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { HeroInfo } from './HeroInfo';

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="row py-3 g-0 justify-content-center flex-column-reverse flex-sm-row">
        <div className="col-10 col-sm-6 col-lg-3 shadow object-fit-cover rounded p-2 align-self-center">
          <img
            className="img-fluid rounded"
            src={`../assets/${heroId}.jpg`}
            alt=""
          />
        </div>

        <div className="col-12 col-sm-6 col-lg-4 px-4 py-3">
          <HeroInfo {...hero} />

          {/* Back button */}
          <button
            className="btn btn-dark shadow"
            onClick={() => {
              if (history.length <= 2) {
                history.push('/');
              } else {
                history.goBack();
              }
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};
