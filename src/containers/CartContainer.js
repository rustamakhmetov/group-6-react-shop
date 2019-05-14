import React, { Component } from 'react';
import CartButton from "../components/CartButton";
import CartContext from '../contexts/CartContext';

class CartContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  render() {
    return (
      <CartContext.Provider value={this.state.items}>
        <CartButton />
      </CartContext.Provider>
    );
  }
}

export default CartContainer;
