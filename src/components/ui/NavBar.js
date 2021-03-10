import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
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

            <li className="nav-item ms-lg-auto">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                to="/login"
              >
                Logout
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link"
                href="#"
              >
                Features
              </NavLink>
            </li>
             */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
