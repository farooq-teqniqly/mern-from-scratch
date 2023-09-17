import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Rating = ({ rating }) => {
  return !rating ? (
    <span>Not yet rated</span>
  ) : (
    <ProgressBar
      min={0}
      max={5}
      now={rating}
      label={`Rated ${rating} out of 5`}
    />
  );
};
