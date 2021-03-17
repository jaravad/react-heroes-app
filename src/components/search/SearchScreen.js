import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';

import { HeroesList } from '../heroes/HeroesList';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  // * query strings are stored in location.search
  const location = useLocation();
  // * parse query strings
  const { q = '' } = queryString.parse(location.search);

  const [{ searchTerm }, handleChange] = useForm({ searchTerm: q });

  const heroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchTerm}`);
  };

  return (
    <div className="fade-anim">
      <h2 className="pb-2 mb-3 border-bottom">Search heroes</h2>
      <div className="row">
        <form
          action=""
          className="d-flex align-items-center col-md-6 col-xl-4"
          onSubmit={handleSearch}
        >
          <input
            autoComplete="off"
            className="form-control me-2"
            name="searchTerm"
            onChange={handleChange}
            placeholder="Type hero name"
            type="text"
            value={searchTerm}
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
      </div>

      <HeroesList heroes={heroes} className="fade-anim" />
    </div>
  );
};
