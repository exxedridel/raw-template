import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/setapps-logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid nav-cont">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="setapps logo" />
          Set<b>apps</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bold">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICES
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="services1" className="dropdown-item">
                    Webapp calculator
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Logo-svg creation
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Improve performance
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                ABOUT
              </Link>
            </li>
          </ul>
          <a href="https://wa.me/message/QNWKISFC6MBJI1">
            <button className="btn btn-primary nav-btn" type="submit">
              LET'S CONNECT
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
