import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

const App = () => (
  <div>
    <h1>Shopping Cart</h1>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
);

export default App;
