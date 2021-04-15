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
    const { image, title } = this.props;
    return (
      <div id={this.makeId(title)} className="card-div">
        <div
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + image})` }}
          className="card-top"
        ></div>
        <div className="card-bottom">
          <h1>{title}</h1>
          <div>
            <input
              className="quantity"
              type="number"
              max="3"
              min="1"
              placeholder="1"
            ></input>
            <button
              className="add-to-cart"
              onClick={(e) => {
                let quantity = e.target.previousSibling;
                if (quantity.value >= 1) {
                  let cardId = e.target.parentNode.parentNode.parentNode;
                  this.setState({ cState: this.state.cState.push(2) });
                  console.log(this.state.cState);
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
