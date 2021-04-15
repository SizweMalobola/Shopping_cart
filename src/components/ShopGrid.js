import React, { Component } from "react";

export default class ShopGrid extends Component {
  r;
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div id="shop-grid-div">{this.props.children}</div>;
  }
}
