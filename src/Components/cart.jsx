import React, { Component } from "react";
class Cart extends Component {
  state = {};
  render() {
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
                  </tr>
                </thead>
                <tbody className="table-group-divider table-hover">
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cart;
