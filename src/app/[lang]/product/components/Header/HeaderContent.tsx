/**
 * HeaderContent displays the main course title, star rating, and description.
 *
 * @param {string} title - The course title to display
 * @param {number} rating - Average rating value (1-5)
 * @param {string} ratingText - Supplementary rating text
 * @param {string} descriptionHtml - HTML string with course description
 */

import ClientRating from "./ClientRating";

interface HeaderContentProps {
  title: string;
  rating: number;
  ratingText: string;
  descriptionHtml: string;
}

export function HeaderContent({
  title,
  rating,
  ratingText,
  descriptionHtml,
}: HeaderContentProps) {
  return (
    <div className="col-span-2 px-20">
      <h1 className="mb-2 text-[21px] font-semibold md:text-4xl">{title}</h1>
      <div className="flex gap-2 items-end mb-2">
        <ClientRating rating={rating} />
        <p className="font-bengali">{ratingText}</p>
      </div>
      <div
        className="text-[#A3A3A3] font-bengali"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
    </div>
  );
}
