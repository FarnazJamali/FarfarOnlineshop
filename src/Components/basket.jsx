import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
class Basket extends Component {
  state = {};
  render() {
    const { shoppingCart, onIncrement, onDecrement, onCheck, onDelete } =
      this.props;
    return (
      <>
        <div className="container vh-100">
          <div className="row m-3 justify-content-center align-items-center">
            <div className="col-6 ">
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
                  {shoppingCart.map((product) => (
                    <tr key={product.id}>
                      <td>{`${product.title}`}</td>
                      <td>{`${product.price}`}</td>
                      <td>
                        <div className="btn-group btn-group-sm" role="group">
                          <button
                            className="btn btn-success"
                            onClick={() => onIncrement(product)}
                          >
                            <FontAwesomeIcon icon={"plus"} />
                          </button>

                          <button className="btn btn-light" disabled>
                            {`${product.count}`}
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDecrement(product)}
                          >
                            <FontAwesomeIcon icon={"minus"} />
                          </button>
                          <button
                            className="btn"
                            onClick={() => onDelete(product)}
                          >
                            <FontAwesomeIcon icon={"trash-alt"} />
                          </button>
                        </div>
                      </td>
                      <td>{`${product.price * product.count}`}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan="3" scope="row">
                      Total sum
                    </th>
                    <td>
                      {shoppingCart.reduce((acc, cur) => {
                        return acc + cur.count * cur.price;
                      }, 0)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Basket;
