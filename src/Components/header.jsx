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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                  {/* Modal Begins */}
                  <button
                    type="button"
                    className="btn btn-light btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <FontAwesomeIcon icon={"basket-shopping"} />
                    <span className="badge text-bg-secondary">
                      {shoppingCart.length}
                    </span>
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Shopping Cart
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <table className="table table-striped align-middle">
                            <caption>User's Shopping Cart</caption>
                            <thead>
                              <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Count</th>
                                <th scope="col">Sum</th>
                              </tr>
                            </thead>
                            <tbody className="table-group-divider table-hover">
                              {products.map((p) => (
                                <tr key={p.id}>
                                  <td>{`${p.title}`}</td>
                                  <td>{`${p.price}`}</td>
                                  <td>
                                    <div
                                      className="btn-group btn-group-sm"
                                      role="group"
                                    >
                                      <button
                                        className="btn btn-success"
                                        onClick={() => onIncrement(p)}
                                      >
                                        <FontAwesomeIcon icon={"plus"} />
                                      </button>

                                      <button
                                        className="btn btn-light"
                                        disabled
                                      >
                                        {/* {onCheck(products.count)} */}
                                        {`${p.productQuantity}`}
                                      </button>
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => onDecrement(p)}
                                      >
                                        <FontAwesomeIcon icon={"minus"} />
                                      </button>
                                    </div>
                                  </td>
                                  <td>{`${p.price * p.quantity}`}</td>
                                </tr>
                              ))}
                            </tbody>
                            <tfoot></tfoot>
                          </table>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal Ends */}
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link ms-auto flex-grow"
                    aria-current="page"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
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
