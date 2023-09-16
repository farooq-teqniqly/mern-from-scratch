import React from "react";
import Card from "react-bootstrap/Card";

export const Product = ({ product, showImage = true }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Footer>${product.price}</Card.Footer>
      {showImage && <Card.Img src={product.imageUrl} alt={product.name} />}
    </Card>
  );
};
