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
  });
});
