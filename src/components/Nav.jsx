import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" id="home" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" id="logout" to="/search">
              Search
            </Link>
            <Link className="nav-item nav-link" id="login" to="/artists">
              Artists
            </Link>
            <Link className="nav-item nav-link" id="signUp" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
