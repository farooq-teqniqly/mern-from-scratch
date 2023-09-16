import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header component", () => {
  describe("Layout", () => {
    it("Has heading text", () => {
      render(<Header></Header>);
      const heading = screen.queryByRole("heading", { name: "ProShop" });
      expect(heading).toBeInTheDocument();
    });
    it("Has home page link", () => {
      render(<Header></Header>);
      const link = screen.queryByRole("link", { name: "Home" });
      expect(link).toBeInTheDocument();
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
