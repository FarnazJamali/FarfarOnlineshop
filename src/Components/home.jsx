import React, { Component } from "react";
import Trending from "./trending";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <hr />

        <Trending />
      </>
    );
  }
}

export default Home;
