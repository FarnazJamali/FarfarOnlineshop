import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Category extends Component {
  state = {
    categoryList: [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ],
  };
  render() {
    const { categoryList } = this.state;
    const { category } = this.props.match.params;
    let filteredCategory = [];
    if (category === undefined) {
      filteredCategory = [...categoryList];
    }

    // console.log(categoryList);
    return (
      <>
        <div className="d-flex flex-column align-items-center">
          <h6 className="my-4">Categories</h6>
          <ul className="list-group list-group-horizontal">
            {categoryList.map((c, i) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-start"
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
        </div>
      </>
    );
  }
}

export default Category;
