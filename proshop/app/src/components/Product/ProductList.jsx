import React from "react";
import { Product } from "./Product";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const ProductList = ({ products, showImages = true }) => {
  return (
    <Row xs={1} md={3} data-testid="product-list">
      {products.map((product) => (
        <Col key={product.id}>
          <Product
            key={product.id}
            product={product}
            showImage={showImages}
          ></Product>
        </Col>
      ))}
    </Row>
  );
};
