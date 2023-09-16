import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Header component", () => {
  describe("Layout", () => {
    it("Has copyright text", () => {
      render(<Footer></Footer>);
      const copyright = screen.getByText(
        `©${new Date().getFullYear()} ProShop. All rights reserved.`
      );
      expect(copyright).toBeInTheDocument();
    });
    it("Has privacy policy link", () => {
      render(<Footer></Footer>);
      const link = screen.queryByRole("link", { name: "Privacy Policy" });
      expect(link).toBeInTheDocument();
    });
    it("Has terms of service link", () => {
      render(<Footer></Footer>);
      const link = screen.queryByRole("link", { name: "Terms of Service" });
      expect(link).toBeInTheDocument();
    });
  });
});
