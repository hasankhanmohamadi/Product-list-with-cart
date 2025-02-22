import React from 'react';
import './ProductItemStyle.css';
import cartIcon from '../assets/icon/icon-add-to-cart.svg';

function ProductItem({ product, addToCart }) {
  return (
    <div className="product-item">
      <picture>
        <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
        <source media="(min-width: 768px)" srcSet={product.image.tablet} />
        <source media="(min-width: 480px)" srcSet={product.image.mobile} />
        <img src={product.image.thumbnail} alt={product.name} />
      </picture>

      <div className="product-info">
        {/* Product name and price */}
        <h2>{product.name}</h2>
        <p>${product.price.toFixed(2)}</p>
      </div>
      <button onClick={() => addToCart(product)}>
        <img src={cartIcon} alt="Cart Icon" className="cart-icon" /> 
        Add to Cart
      </button>
        </div>
  );
}

export default ProductItem;
