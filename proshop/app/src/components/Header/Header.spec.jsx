import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

// test("Output html", () => {
//   const { container } = render(<Header></Header>);
//   console.log(container.innerHTML);
// });

describe("Header component", () => {
  describe("Layout", () => {
    it("Has home page link", () => {
      render(<Header></Header>);
      const link = screen.getByText("ProShop");
      expect(link).toHaveAttribute("href", "/");
    });
    it("Has login link", () => {
      render(<Header></Header>);
      const link = screen.queryByRole("link", { name: "Login" });
      expect(link).toBeInTheDocument();
    });
    it("Has cart link", () => {
      render(<Header></Header>);
      const link = screen.queryByRole("link", { name: "Cart" });
      expect(link).toBeInTheDocument();
    });
  });
});
