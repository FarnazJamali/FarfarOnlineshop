import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class Product extends Component {
  state = {};

  render() {
    const { product, onAdd, onDecrement, onIncrement } = this.props;

    return (
      <>
        <div className="card-group">
          <div className="card h-100">
            <img src={`${product.image}`} className="card-img-top" alt="..." />
            <div className="card-body "></div>
            <div className="card-footer">
              <h6 className="card-title ">{product.title}</h6>
              <small className="text-muted d-flex justify-content-between">
                <span className="fw-bold">{product.price} $</span>
                {product.count === 0 ? (
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onAdd(product)}
                  >
                    Add to Cart!
                  </button>
                ) : (
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
                  </div>
                )}
              </small>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Product;
