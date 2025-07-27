/**
 * ProductPage fetches course data and displays the course header with rating,
 * and main content. It uses server-side data fetching and separates UI concerns.
 *
 * Dynamic rendering is forced with `dynamic = 'force-dynamic'`.
 */

import { getProduct } from "@/lib/api";
import { HeaderContent } from "./components/Header";
import { Data } from "./types";

export const dynamic = "force-dynamic"; // for SSR
// or use export const revalidate = 3600; // for ISR

export default async function ProductPage() {
  // Fetch course product data for Bengali locale
  const data: Data = await getProduct("bn");

  return (
    <div className="relative">
      <header className="bg-[url(/banner.jpeg)] min-h-[600px] md:min-h-[300px] w-full bg-cover bg-center text-white flex items-center">
        {/* Container grid to layout header content in 3 columns, content spans 2 */}
        <div className="h-full max-w-7xl mx-auto grid grid-cols-3 items-center">
          {/* Main course info */}
          <HeaderContent
            title={data.title}
            rating={5}
            ratingText="(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)"
            descriptionHtml={data.description}
          />
        </div>
      </header>
      <main className="max-w-7xl mx-auto ">{data.title}</main>
    </div>
  );
}
