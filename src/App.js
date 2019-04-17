import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import TaskList from "./components/TaskList";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import "./App.css";

export const PageNotFound = () => {
  return (
    <Alert bsStyle="danger">
      <strong>Error:</strong> The page you're looking for does not exist!
    </Alert>
  );
};

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="well"
          style={{ backgroundColor: "#232323", height: "50px" }}
        >
          <span style={{ color: "#fff", margin: "0 auto" }}>Shopping Cart</span>
          <Link
            to="/cart"
            style={{ float: "right" }}
            className="btn btn-danger customBtn pull-right"
          >
            <Cart />
          </Link>
        </div>
        <br />
        <Switch>
          <Route path="/" render={() => <Redirect to="/shopping" />} exact />
          <Route path="/shopping" component={TaskList} />
           <Route path="/cart" component={Checkout} />
          <Route path="**" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
