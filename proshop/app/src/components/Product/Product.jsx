import React from "react";

export const Product = ({ product, showImage = true }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
      {showImage && <img src={product.imageUrl} alt={product.name} />}
    </div>
  );
};
