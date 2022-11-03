import React, { Component } from "react";
import Trending from "./trending";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container my-5">
          <h4>Welcome to Farfar onlineshop</h4>
          <hr />
          <div className="row justify-content-center">
            <div className="col-10">
              <Trending />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
