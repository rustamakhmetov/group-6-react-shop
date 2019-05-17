import React, { Component, Fragment } from 'react';

import Catalog from '../components/Catalog';
import products from '../constants/Products';
import CartContainer from './CartContainer';

class CatalogPage extends Component {

  render() {

    return (
      <CartContainer>
        <Catalog products={products}/>
      </CartContainer>
    );
  }
}

export default CatalogPage;
