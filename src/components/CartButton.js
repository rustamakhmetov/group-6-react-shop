import React, { Component } from 'react';

class CartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <button>Cart: {this.state.count}</button>
    );
  }
}

export default CartButton;
