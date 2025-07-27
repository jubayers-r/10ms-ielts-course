"use client";

import { Rating } from "react-simple-star-rating";

export default function ClientRating({ rating }: { rating: number }) {
  return (
    <Rating
      initialValue={rating}
      readonly
      size={25}
      fillColor="#faa500"    // Tailwind yellow-400
      emptyColor="#e5e7eb"   // Tailwind gray-200
      SVGstyle={{ display: "inline" }}
    />
  );
}