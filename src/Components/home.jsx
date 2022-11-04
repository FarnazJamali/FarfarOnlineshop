import React, { Component } from "react";
import Trending from "./trending";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-7">
              <div className="alert alert-success text-center" role="alert">
                Welcome to Farfar onlineshop
              </div>
            </div>
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
