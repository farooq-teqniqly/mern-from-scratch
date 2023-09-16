import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  describe("Layout", () => {
    it("Has header", () => {
      render(<App></App>);
      const header = screen.getByTestId("header");
      expect(header).toBeInTheDocument();
    });

    it("Has footer", () => {
      render(<App></App>);
      const footer = screen.getByTestId("footer");
      expect(footer).toBeInTheDocument();
    });

    it("Has product list", () => {
      render(<App></App>);
      const footer = screen.getByTestId("product-list");
      expect(footer).toBeInTheDocument();
    });

    it("Does not show product images", () => {
      render(<App></App>);
      const images = screen.queryAllByRole("img");
      expect(images).toHaveLength(0);
    });
  });
});
