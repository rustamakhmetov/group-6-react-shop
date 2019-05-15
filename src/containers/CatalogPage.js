import React, { Component } from 'react';

import Catalog from '../components/Catalog';
import products from '../constants/Products';

class CatalogPage extends Component {
  render() {

    return (
      <Catalog products={products}/>
    );
  }
}

export default CatalogPage;
