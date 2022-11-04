import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class ProductItem extends Component {
  state = {};
  render() {
    const { products } = this.props;
    const productItem = this.props.match.params.id;

    console.log(productItem);
    return (
      <>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-8 p-2 shadow rounded">
              <div className="card mb-3 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={products[productItem - 1].image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        {products[productItem - 1].title}
                      </h5>
                      <p className="card-text">
                        {products[productItem - 1].description}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Rate: {products[productItem - 1].rating.rate} out of 5
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <NavLink to={"/products"}>Back to products</NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductItem;
