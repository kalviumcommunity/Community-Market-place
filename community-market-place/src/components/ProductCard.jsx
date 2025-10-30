import React from "react";
import "./ProductCard.css";

function ProductCard({ image, title, price, seller, category }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p className="product-price">₹{price}</p>
        <p className="product-seller">Seller: {seller}</p>
        <span className="product-category">{category}</span>
      </div>
    </div>
  );
}

export default ProductCard;