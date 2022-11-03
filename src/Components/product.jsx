import React, { Component } from "react";

class Product extends Component {
  state = {};

  render() {
    const { products, onAdd } = this.props;

    return (
      <>
        <div className="card-group">
          <div className="card h-100">
            <img src={`${products.image}`} className="card-img-top" alt="..." />
            <div className="card-body "></div>
            <div className="card-footer">
              <h6 className="card-title ">{products.title}</h6>
              <small className="text-muted d-flex justify-content-between">
                <span className="fw-bold">{products.price} $</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onAdd(products.id)}
                >
                  Add to Cart!
                </button>
              </small>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
