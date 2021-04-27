import React from "react";

export default class Cart extends React.Component {
  state = {
    cartItem: 0
  };
  addToCart = () => {
    this.setState({
      cartItem: this.state.cartItem + 1
    });
  };
  removeFromCart = () => {
    if (this.state.cartItem !== 0) {
      this.setState({
        cartItem: this.state.cartItem - 1
      });
    }
  };
  render() {
    return (
      <div>
        <p>
          <button onClick={this.addToCart}>Add to cart</button>
        </p>
        <p>
          <button onClick={this.removeFromCart}>Remove from cart</button>
        </p>
        <h4>Available Cart Item: {this.state.cartItem}</h4>
      </div>
    );
  }
}
