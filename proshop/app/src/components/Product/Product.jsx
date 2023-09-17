import React from "react";
import Card from "react-bootstrap/Card";
import { Rating } from "../Rating/Rating";

export const Product = ({ product, showImage = true }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Rating rating={product.rating}></Rating>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <Card.Footer>${product.price}</Card.Footer>
      {showImage && <Card.Img src={product.imageUrl} alt={product.name} />}
    </Card>
  );
};
