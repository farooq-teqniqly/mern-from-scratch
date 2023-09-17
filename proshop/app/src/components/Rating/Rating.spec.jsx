import React from "react";
import { render, screen } from "@testing-library/react";
import { Rating } from "./Rating";

describe("Rating component", () => {
  describe("Layout", () => {
    it("Shows rating", () => {
      const rating = 3.2;
      render(<Rating rating={rating}></Rating>);
      const ratingText = screen.getByText(`Rated ${rating} out of 5`);
      expect(ratingText).toBeInTheDocument();
    });
  });

  describe("Logic", () => {
    it("Shows default messsage when no rating", () => {
      render(<Rating></Rating>);
      const ratingText = screen.getByText("Not yet rated");
      expect(ratingText).toBeInTheDocument();
    });
  });
});
