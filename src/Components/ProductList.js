import React from 'react';
import ProductItem from './ProductItem';
import Products from './Products.json';
import './ProductListStyle.css'; 

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h1>Desserts</h1>
      {Products.map((product, index) => (
        <ProductItem key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
