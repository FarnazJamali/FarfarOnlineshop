import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
          <div>
            <li className="nav-item ">
              <div className="btn-group btn-group-sm " role="group">
                <button type="button" className="btn btn-outline-primary">
                  <NavLink
                    className="nav-link ms-auto flex-grow"
                    aria-current="page"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </button>
                <button type="button" className="btn btn-outline-primary">
                  <NavLink
                    className="nav-link ms-auto flex-grow"
                    aria-current="page"
                    to={"/register"}
                  >
                    Register
                  </NavLink>
                </button>
              </div>
            </li>
          </div>

          <p className="text-light mx-auto">
            made with
            <FontAwesomeIcon
              className="btn btn-outline-danger mx-2"
              icon="heart"
            />
            by
            <span>
              <a
                className="text-decoration-none text-warning mx-2"
                href="https://www.linkedin.com/in/farnaz-jamali/"
                role="button"
              >
                Farnaz
              </a>
            </span>
          </p>
        </nav>
      </>
    );
  }
}

export default Footer;
