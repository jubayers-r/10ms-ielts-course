/**
 * HeaderContent displays the main course title, star rating, and description.
 *
 * @param {string} title - The course title to display
 * @param {number} rating - Average rating value (1-5)
 * @param {string} ratingText - Supplementary rating text
 * @param {string} descriptionHtml - HTML string with course description
 */

import { Checklist as CheckItems } from "../../types";
import Checklist from "./Checklist";
import ClientRating from "./ClientRating";
import CTA from "./CTA";
import CustomYouTubePlayer from "./CustomYouTubePlayer";

interface HeaderContentProps {
  title: string;
  rating: number;
  ratingText: string;
  descriptionHtml: string;
  checklist: CheckItems[];
}

export function HeaderContent({
  title,
  rating,
  ratingText,
  descriptionHtml,
  checklist,
}: HeaderContentProps) {
  return (
    <div className="md:col-span-2 py-5 md:py-12 px-4 relative">
      <div className="md:hidden  relative">
        <CustomYouTubePlayer />
      </div>
      <h1 className="mb-2 text-[21px] font-semibold md:text-4xl font-sans">
        {title}
      </h1>
      <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
        <ClientRating rating={rating} className="flex-grow-0" />
        <p className=" whitespace-nowrap">{ratingText}</p>
      </div>
      <div
        className="text-[#A3A3A3]"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />

      <div className=" md:hidden absolute top-full left-0 w-full p-3 bg-white border-x shadow">
        <CTA />
        <Checklist data={checklist} />
      </div>
    </div>
  );
}
