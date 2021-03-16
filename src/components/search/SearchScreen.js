import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {
  const [{ searchTerm }, handleChange] = useForm({ searchTerm: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fade-anim">
      <h2 className="pb-2 mb-3 border-bottom">Search heroes</h2>
      <div className="row">
        <form
          action=""
          className="d-flex align-items-center col-md-6 col-xl-4"
          onSubmit={handleSubmit}
        >
          <input
            autoComplete="off"
            className="form-control me-2"
            name="searchTerm"
            onChange={handleChange}
            type="text"
            value={searchTerm}
          />
          <button className="btn btn-dark" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
