import React from "react";
import { Route, Routes, BrowserRouter as Main } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import coffee from "../DATA/coffee";
import Details from "./detail";
class Routed extends React.Component {
  state = {
    coffee: coffee,
    order: {},
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem("order");

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("order", JSON.stringify(this.state.order));
  }

  addToOrder = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };
  delete = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };
  increment = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1;

    this.setState({ order });
  };

  decrement = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] - 1;
    if (order[key] === 0) {
      delete order[key];
    }
    this.setState({ order });
  };

  render() {
    return (
      <Main>
        <Nav
          coffee={this.state.coffee}
          Order={this.state.order}
          delete={this.delete}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home coffee={this.state.coffee}  />
            }
          />
          <Route path="/products/:productId" element={<Details addToOrder={this.addToOrder} coffee={this.state.coffee}/> }/>
        </Routes>
      </Main>
    );
  }
}
export default Routed;
