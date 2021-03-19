import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useHistory } from 'react-router-dom';

/* this component is not receiving 'history' object as prop because it
  isn't being rendered by a Route component directly, one workaround
  is to receive 'history' as prop from NavBar's parent component as that
  one is being rendered by a Route component thus it is receiving
  'history' as prop. A more clean workaround is to use the react router
  useHistory hook that retrieves 'history' from the Router Provider  
*/

export const NavBar = () => {
  const history = useHistory();

  const {
    user: { username },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);
    history.replace('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <Link className="navbar-brand" to="/marvel">
          Heroes App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/dc"
              >
                DC
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/search"
              >
                Search
              </NavLink>
            </li>

            <li className="nav-item nav-link ms-lg-auto me-lg-2 text-info">
              {username}
            </li>

            <li>
              <button
                onClick={handleLogout}
                className=" btn btn-outline-danger"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
