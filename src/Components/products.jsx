import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  render() {
    // const { title, onIncrement, onDecrement } = this.props;
    const { products, onAdd } = this.props;

    // const { categoryItem } = this.props.match.params;
    // let filteredCategory = [];
    // if (categoryItem) {
    //   products.map((product) => {
    //     if (category.indexOf(categoryItem) >= 0) {
    //       filteredCategory.push(product);
    //     }
    //     console.log(filteredCategory);
    //   });
    // } else {
    //   filteredCategory = [...category];
    // }
    // console.log(filteredCategory);
    // console.log(products);
    return (
      <>
        {/* Category Begins */}
        {/* <div className="d-flex flex-column align-items-center">
          <h6 className="my-4">Categories</h6>
          <ul className="list-group list-group-horizontal">
            {filteredCategory.map((c, i) => (
              <li
                className={
                  "list-group-item d-flex justify-content-between align-items-start"
                }
                key={i}
              >
                <div className="ms-2 me-auto">
                  <NavLink
                    to={`/${c}`}
                    className="fw-bold text-decoration-none"
                  >
                    {c}
                  </NavLink>
                </div>
                <span className="badge bg-primary rounded-pill">14</span>
              </li>
            ))}
          </ul>
        </div> */}
        {/* Category Ends */}
        <div className="container">
          <div className="row row-cols-md-5 g-4 m-3">
            {products.map((product) => (
              <Product product={product} onAdd={onAdd} key={product.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Products;
