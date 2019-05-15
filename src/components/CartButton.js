import React, {Component, Fragment} from 'react';

import CartContext from '../contexts/CartContext';

class CartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <CartContext.Consumer>
        {
          ({getProducts}) => {
            return (
              <button>{getProducts().length}</button>
            )
          }
        }
      </CartContext.Consumer>
    )
  }
}

export default CartButton;
