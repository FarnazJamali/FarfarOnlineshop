import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
class Basket extends Component {
  state = {};
  render() {
    const { shoppingCart, onIncrement, onDecrement, onCheck } = this.props;
    return (
      <>
        <div className="container">
          <div className="row m-3">
            <div className="col-6 mx-auto">
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
                            {onCheck(product.count)}
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => onDecrement(product)}
                          >
                            <FontAwesomeIcon icon={"minus"} />
                          </button>
                        </div>
                      </td>
                      <td>{`${product.price * product.count}`}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  {shoppingCart.reduce((acc, cur) => {
                    return acc + cur.count * cur.price;
                  }, 0)}
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
