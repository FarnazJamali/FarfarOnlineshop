import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    const { products, onAdd, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5  g-4 m-3">
            {products.map((product) => (
              <Product
                product={product}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
                onAdd={onAdd}
                onDelete={onDelete}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Products;
