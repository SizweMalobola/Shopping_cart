import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ModalPortal from "./ModalPortal";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.toggleClicked = this.toggleClicked.bind(this);
    this.isEmptyRef = null;
  }
  toggleClicked() {
    this.setState({ clicked: !this.state.clicked });
  }

  //! fix
  componentDidUpdate() {
    if (this.isEmptyRef) {
      setTimeout(() => {
        this.toggleClicked();
      }, 1000);
    }
  }
  render() {
    const { cartItems, removeItem } = this.props;
    return (
      <>
        <div id="cart" onClick={() => this.toggleClicked()}>
          <h1>
            <FaShoppingCart /> <span id="cart-span">0</span>
          </h1>
        </div>
        {this.state.clicked &&
          (cartItems.length > 0 ? (
            <ModalPortal
              closeModal={this.toggleClicked}
              removeItem={removeItem}
              cartItems={cartItems}
            />
          ) : (
            <div
              id="cart-empty"
              ref={(div) => (this.isEmptyRef = div)}
              onClick={() => {
                this.toggleClicked();
              }}
            >
              <h3>Your Cart is Empty</h3>
            </div>
          ))}
      </>
    );
  }
}
