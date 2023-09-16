import React from "react";
import { render, screen } from "@testing-library/react";
import { Product } from "./Product";

const product = {
  name: "Baseball",
  description: "A baseball to throw and hit.",
  price: 9.99,
  imageUrl: "baseball.png",
};

describe("Product component", () => {
  describe("Layout", () => {
    it("Has product name", () => {
      render(<Product product={product}></Product>);
      const name = screen.getByRole("heading", { name: product.name });
      expect(name).toBeInTheDocument();
    });

    it("Has product description", () => {
      render(<Product product={product}></Product>);
      const description = screen.getByText(product.description);
      expect(description).toBeInTheDocument();
    });

    it("Has product price", () => {
      render(<Product product={product}></Product>);
      const price = screen.getByText(`$${product.price}`);
      expect(price).toBeInTheDocument();
    });

    describe("Product image", () => {
      it("Has product image", () => {
        render(<Product product={product}></Product>);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", product.imageUrl);
      });

      it("Has image alternate text", () => {
        render(<Product product={product}></Product>);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("alt", product.name);
      });

      it("Not shown if showImage prop is false", () => {
        render(<Product product={product} showImage={false}></Product>);
        const images = screen.queryAllByRole("img");
        expect(images).toHaveLength(0);
      });
    });
  });
});
