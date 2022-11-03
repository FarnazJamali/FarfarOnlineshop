import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-dark">
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
