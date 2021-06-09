import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cState: this.props.cState,
    };
    this.makeId = this.makeId.bind(this);
  }
  makeId(title) {
    let string = title.toLowerCase().split(" ");
    let Id = string.join("-");
    return Id;
  }

  render() {
    const { image, title, handler } = this.props;
    return (
      <div id={this.makeId(title)} className="card-div">
        <div
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + image})` }}
          className="card-top"
        ></div>
        <div className="card-bottom">
          <h1>{title}</h1>
          <div>
            <div>
              <span>QTY:</span>
              <input className="quantity" type="number" max="3" min="1"></input>
            </div>
            <button
              className="add-to-cart"
              onClick={(e) => {
                let quantity = e.target.previousSibling.lastChild;
                if (quantity.value >= 1) {
                  let cardId = e.target.parentNode.parentNode.parentNode;
                  let image = cardId.querySelector(".card-top");
                  image = image.style.backgroundImage;
                  // console.log(image.substring(5, image.length - 2));
                  // return title and quantity
                  handler({
                    title: title,
                    id: cardId,
                    quantity: parseInt(quantity.value),
                    image: image.substring(5, image.length - 2),
                    price: 140,
                  });
                }
              }}
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    );
  }
}
