import React, { Component } from "react";
import Axios from "axios";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Components/header";
import Products from "./Components/products";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Home from "./Components/home";
import Login from "./Components/login";
import Basket from "./Components/basket";
import Footer from "./Components/footer";
import Register from "./Components/register";
import ProductItem from "./Components/productItem";
import NotFound from "./Components/NotFound.jsx";
library.add(fas);

class App extends Component {
  state = { products: [], category: [], shoppingCart: [] };

  async componentDidMount() {
    const { data: products } = await Axios.get(
      "https://fakestoreapi.com/products"
    );
    products.map((product) => (product.count = 0));
    const { data: category } = await Axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    const shoppingCart = [];
    this.setState({ products, category, shoppingCart });
  }

  checkNumber = (count) => {
    return count;
  };
  handleAddToCart = (product) => {
    console.log(product);
    const { shoppingCart, products } = { ...this.state };
    const hasProduct = shoppingCart.some((item) => item === product);
    console.log(hasProduct);
    let productIndex = products.indexOf(product);
    console.log(productIndex);
    if (!hasProduct) {
      shoppingCart.push(products[productIndex]);
      shoppingCart[shoppingCart.length - 1].count = 1;
    } else {
      shoppingCart[shoppingCart.length - 1].count++;
    }
    console.log(shoppingCart);

    this.setState({ shoppingCart });
  };
  handleIncrement = (product) => {
    const { products } = { ...this.state };
    let productIndex = products.indexOf(product);
    products[productIndex].count++;
    this.setState({ products });
  };
  handleDecrement = (product) => {
    const { products } = { ...this.state };
    let productIndex = products.indexOf(product);
    products[productIndex].count--;
    if (products[productIndex].count < 0) products[productIndex].count = 0;
    this.setState({ products });
    console.log(product);
  };
  handleDelete = (product) => {
    const { shoppingCart } = { ...this.state };
    const filteredShoppingCart = shoppingCart.filter(
      (p) => product.id !== p.id
    );
    this.setState({ shoppingCart: filteredShoppingCart });
  };
  render() {
    const { products, shoppingCart } = this.state;
    console.log(this.state);
    return (
      <>
        <Header
          products={products}
          shoppingCart={shoppingCart}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onCheck={this.checkNumber}
        />

        <div className="container-fluid my-5 min-vh-100">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path={"/Not-Found"}>
                  <NotFound />
                </Route>
                <Route path={"/login"}>
                  <Login />
                </Route>
                <Route path={"/register"}>
                  <Register />
                </Route>
                <Route
                  path={"/basket"}
                  render={(props) => (
                    <Basket
                      {...props}
                      products={products}
                      shoppingCart={shoppingCart}
                      onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement}
                      onDelete={this.handleDelete}
                      onCheck={this.checkNumber}
                    />
                  )}
                ></Route>
                <Route
                  path={"/productItem/:id"}
                  render={(props) => (
                    <ProductItem {...props} products={products} />
                  )}
                ></Route>
                <Route
                  path={"/products"}
                  render={(props) => (
                    <Products
                      {...props}
                      products={products}
                      shoppingCart={shoppingCart}
                      onAdd={this.handleAddToCart}
                      onIncrement={this.handleIncrement}
                      onDecrement={this.handleDecrement}
                    />
                  )}
                ></Route>
                <Route path={"/"} exact>
                  <Home />
                </Route>
                <Redirect to={"/Not-Found"}></Redirect>
              </Switch>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
