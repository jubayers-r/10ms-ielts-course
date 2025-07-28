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
import InstructorCard from "./components/InstructorCard";
import FeaturesCard from "./components/FeaturesCard";
import ChecklistWithImageCard from "./components/ChecklistWithImageCard";
import IELTSAccordion from "./components/IELTSAccordion";

export const dynamic = "force-dynamic"; // for SSR
// or use export const revalidate = 3600; // for ISR

export default async function ProductPage() {
  // Fetch course product data for Bengali locale
  const data: Data = await getProduct("bn");
  const { name: instructorSectionName } = data.sections.find(
    (section) => section.type === "instructors"
  ) ?? { name: "Instructors" }; // fallback default
  const { name: featuresSectionName } = data.sections.find(
    (section) => section.type === "features"
  ) ?? { name: "The way course is laid out" }; // fallback default
  const { name: pointersSectionName } = data.sections.find(
    (section) => section.type === "pointers"
  ) ?? { name: "What will you learn by doing this course" }; // fallback default
  const { name: feature_explanations_SectionName } = data.sections.find(
    (section) => section.type === "feature_explanations"
  ) ?? { name: "Course exclusive feature" }; // fallback default

  const { name: aboutSectionName } = data.sections.find(
    (section) => section.type === "about"
  ) ?? { name: "Course Details" }; // fallback default

  const sampleChecklist = [
    "Lifetime access to all materials",
    "Instant certification after completion",
    "Weekly doubt-clearing live sessions",
    "Personalized progress tracking",
  ];

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
            <div className="relative bg-white p-1 shadow ">
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
      <main className="max-w-6xl mx-auto grid md:grid-cols-3 pt-[500px] md:pt-0">
        <div className="col-span-2 mx-5 space-y-10">
          <CourseTabs data={data.sections} />
          {/* instructors section */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mt-7 ">
              {instructorSectionName}
            </h3>
            {data.sections
              .find((section) => section.type === "instructors")
              ?.values?.map((instructor: any, idx: number) => (
                <div
                  key={idx}
                  className="md:mt-3 md:border md:border-gray-300 md:rounded-sm"
                >
                  <InstructorCard instructor={instructor} />
                </div>
              ))}
          </div>
          {/* the way course is laid out */}
          <>
            <h3 className="text-lg md:text-xl font-semibold ">
              {featuresSectionName}
            </h3>
            <div className="bg-[#111827] rounded-sm py-8 px-2">
              {data.sections.find((section) => section.type === "features")
                ?.values && (
                <FeaturesCard
                  features={
                    data.sections.find(
                      (section) => section.type === "features"
                    )!.values
                  }
                />
              )}
            </div>
          </>
          {/* What will you learn by doing this course */}
          <>
            <h3 className="text-xl md:text-2xl font-semibold ">
              {pointersSectionName}
            </h3>
            <div className=" border rounded-sm ">
              {data.sections.find((section) => section.type === "pointers")
                ?.values && (
                <FeaturesCard
                  features={
                    data.sections.find(
                      (section) => section.type === "pointers"
                    )!.values
                  }
                />
              )}
            </div>
          </>
          {/* course exclusive features */}
          <>
            <h3 className="text-lg md:text-xl font-semibold ">
              {feature_explanations_SectionName}
            </h3>
            <div className="border p-5 rounded-sm ">
              <ChecklistWithImageCard
                checklist={sampleChecklist}
                imageUrl="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png"
              />
              <hr className="border  my-5" />
              <ChecklistWithImageCard
                checklist={sampleChecklist}
                imageUrl="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png"
              />
            </div>
          </>
          {/* course details */}
          <>
            <h3 className="text-lg md:text-xl font-semibold ">
              {aboutSectionName}
            </h3>
            <div className=" border rounded-lg">
              {data.sections.find((section) => section.type === "about")
                ?.values && (
                <IELTSAccordion
                  data={
                    data.sections.find((section) => section.type === "about")!
                      .values
                  }
                />
              )}
            </div>
          </>
        </div>
      </main>
    </div>
  );
}
