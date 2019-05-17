import React, {Component, Fragment} from 'react';

import CartContext from '../contexts/CartContext';

class CartButton extends Component {

  render() {
    return (
      <CartContext.Consumer>
        {
          ({getCountProducts}) => {
            return (
              <button>{getCountProducts()}</button>
            )
          }
        }
      </CartContext.Consumer>
    )
  }
}

export default CartButton;
