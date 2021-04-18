import React, { Component } from "react";
// import { FaSkull } from "react-icons/fa";
export default class ShopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { activationHandler } = this.props;
    return (
      <div id="shop-nav-div">
        <button disabled={true}>Choose Tag</button>
        <button
          id="nav-btn-active"
          onClick={(e) => {
            activationHandler(e.target);
          }}
        >
          All
        </button>
        <button
          onClick={(e) => {
            activationHandler(e.target);
          }}
        >
          Gore
        </button>
        <button
          onClick={(e) => {
            activationHandler(e.target);
          }}
        >
          Slasher
        </button>
        <button
          onClick={(e) => {
            activationHandler(e.target);
          }}
        >
          Foreign
        </button>
      </div>
    );
  }
}
