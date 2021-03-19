import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

export const NavBar = () => {
  const {
    user: { username },
  } = useContext(AuthContext);
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

            <li className="nav-item nav-link ms-lg-auto text-info">
              {username}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
