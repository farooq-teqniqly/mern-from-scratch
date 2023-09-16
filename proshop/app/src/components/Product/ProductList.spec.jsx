import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductList } from "./ProductList";

const products = [
  {
    id: "p1",
    name: "Product 1",
  },
  {
    id: "p2",
    name: "Product 2",
  },
  {
    id: "p3",
    name: "Product 3",
  },
];

describe("Product List component", () => {
  describe("Layout", () => {
    it("Shows the products", () => {
      render(<ProductList products={products}></ProductList>);
      const productNames = screen.getAllByText(/Product \d/);
      expect(productNames).toHaveLength(3);
    });
  });
});
