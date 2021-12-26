import { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { HeroInfo } from './HeroInfo';
import { heroImages } from '../../helpers/heroImages';

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />;
  }
  return (
    <div className="fade-anim">
      <div className="row py-3 g-0 justify-content-center flex-column-reverse flex-sm-row">
        <div className="col-10 col-sm-6 col-lg-3 shadow object-fit-cover rounded p-2 align-self-center from-bottom-anim">
          <img
            className="img-fluid rounded"
            src={heroImages(`./${heroId}.jpg`).default}
            alt=""
          />
        </div>

        <div className="col-12 col-sm-6 col-lg-4 px-4 py-3 from-right-anim">
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
    </div>
  );
};
