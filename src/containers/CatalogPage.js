import React, { Component, Fragment } from 'react';

import Catalog from '../components/Catalog';
import CartButton from '../components/CartButton';
import products from '../constants/Products';

class CatalogPage extends Component {
  render() {

    return (
      <Fragment>
        <CartButton />
        <Catalog products={products}/>
      </Fragment>
    );
  }
}

export default CatalogPage;
