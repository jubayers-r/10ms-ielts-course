"use client";

import { Rating } from "react-simple-star-rating";
interface ClientRatingProps {
  rating: number;
  className?: string;
}

export default function ClientRating({ rating, className }: ClientRatingProps) {
  return (
    <Rating
      initialValue={rating}
      readonly
      size={20}
      fillColor="#faa500" // Tailwind yellow-400
      emptyColor="#e5e7eb" // Tailwind gray-200
      SVGstyle={{ display: "inline" }}
      className={className}
    />
  );
}
