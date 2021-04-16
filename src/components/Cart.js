import React, { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.toggleClicked = this.toggleClicked.bind(this);
  }
  toggleClicked() {
    this.setState({ clicked: !this.state.clicked });
  }
  render() {
    const { cartItems } = this.props;
    return (
      <>
        <div id="cart" onClick={() => this.toggleClicked()}>
          <h1>
            <FaShoppingCart /> Cart (<span id="cart-span">0</span>)
          </h1>
        </div>
        {this.state.clicked && (
          <div id="cart-list">
            {cartItems.map((item, index) => {
              return (
                <div className="cart-item" key={index}>
                  <div
                    className="cart-item-image"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + item.image
                      })`,
                    }}
                  ></div>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <span className="cart-item-name">{item.title}</span>
                  <button className="cart-item-del">X</button>
                  <span className="cart-item-price">{item.price}</span>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
