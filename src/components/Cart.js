import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="cart">
        <h1>
          <FaShoppingCart /> Cart (<span>0</span>)
        </h1>
      </div>
    );
  }
}
