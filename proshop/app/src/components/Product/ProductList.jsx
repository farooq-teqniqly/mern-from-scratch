import React from "react";
import { Product } from "./Product";

export const ProductList = ({ products, showImages = true }) => {
  return (
    <div data-testid="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          showImage={showImages}
        ></Product>
      ))}
    </div>
  );
};
