/**
 * Course Product Page
 *
 * This is the main page for rendering course details. It:
 * - Fetches course data server-side (SSR) via `getProduct`
 * - Displays course header (title, rating, description, checklist)
 * - Embeds a YouTube player trailer
 * - Renders a call-to-action and checklist
 * - Shows scrollable tabbed sections using `CourseTabs`
 *
 * Data structure: `Data` from `types.ts`, including `sections`, `checklist`, etc.
 *
 * SSR is forced with `dynamic = 'force-dynamic'`.
 */

import { getProduct } from "@/lib/api";
import { HeaderContent } from "./components/Header";
import { Data } from "./types";
import CustomYouTubePlayer from "./components/Header/CustomYouTubePlayer";
import CTA from "./components/Header/CTA";
import Checklist from "./components/Header/Checklist";
import CourseTabs from "./components/CourseTabs";

export const dynamic = "force-dynamic"; // for SSR
// or use export const revalidate = 3600; // for ISR

export default async function ProductPage() {
  // Fetch course product data for Bengali locale
  const data: Data = await getProduct("bn");


  return (
    <div className="relative font-bengali">
      <header className="bg-[url(/banner.jpeg)] w-full bg-cover bg-center text-white flex items-center">
        {/* Container grid to layout header content in 3 columns, content spans 2 */}
        <div className="h-full max-w-6xl mx-auto grid md:grid-cols-3 items-center">
          {/* Main course info */}
          <HeaderContent
            title={data.title}
            rating={5}
            ratingText="(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)"
            descriptionHtml={data.description}
            checklist={data.checklist}
          />
          {/*  Trailer + CTA + Checklists from medium screens*/}
          <div className="hidden md:block mt-20">
            <div className="relative bg-white p-1 shadow">
              <CustomYouTubePlayer />

              {/* These 2 will now pop below the card */}
              <div className="absolute top-full left-0 w-full p-3 bg-white border-x ">
                <CTA />
              </div>
              <div className="absolute lg:top-[calc(100%+120px)] md:top-full left-0 w-full  bg-white ">
                <Checklist data={data.checklist} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto grid grid-cols-3 ">
        <div className="col-span-2">
          <CourseTabs data={data.sections} />
        </div>
      </main>
    </div>
  );
}
