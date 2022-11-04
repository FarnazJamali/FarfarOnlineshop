import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    const { products, shoppingCart, onIncrement, onDecrement, onCheck } =
      this.props;
    console.log(shoppingCart);
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top nav-fill">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/products"}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to={"/basket"}
                  >
                    <FontAwesomeIcon
                      icon={"basket-shopping"}
                      className="btn btn-outline-danger"
                    />
                    <span className="badge text-bg-secondary">
                      {shoppingCart.length}
                    </span>
                  </NavLink>
                </li>
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
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
