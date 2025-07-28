/**
 * CourseTabs Component
 *
 * Horizontally scrollable tab interface for course sections.
 * - Renders section names as tabs
 * - Scrolls with left/right arrows on larger screens
 * - Highlights active tab
 *
 * Props:
 * - data: Section[] — Array of section objects to render as tabs
 *
 * Accessibility:
 * - Uses `button` elements for keyboard navigation
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "../types";

type props = {
  data: Section[];
};

export default function CourseTabs({ data }: props) {
  const [activeTab, setActiveTab] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Updates visibility of scroll buttons based on scroll position
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1); // -1 fixes float rounding
  };

  // Scrolls the tab container left or right by half the width
  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => updateScrollButtons();
    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollButtons);
    updateScrollButtons();

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  return (
    <div className="relative md:flex items-start w-full my-2 hidden ">
      {/* Left arrow */}
      <Button
        size="icon"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        className={cn(
          "absolute left-0 xl:-left-5 z-10 rounded-full bg-[#7f7f7f] text-white  hidden lg:flex",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "hover:bg-[#7f7f7f] hover:text-white"
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Tabs container */}
      <div
        ref={scrollRef}
        // Enables horizontal touch scrolling on mobile (for tab container)
        className="flex gap-4 overflow-x-auto  scrollbar-hide pt-2 lg:ml-3 lg:mr-15 mx-3 border-b touch-pan-x"
      >
        {data.map((section, i) => (
          <button
            key={section.order_idx}
            id={`section-${section.order_idx}`}
            onClick={() => {
              setActiveTab(section.order_idx);
              const sectionType = data[i].type;
              const target = document.getElementById(sectionType);
              if (target) {
                const yOffset = -80; // adjust for navbar height if needed
                const y =
                  target.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className={cn(
              "whitespace-nowrap border-b-2 pb-1 font-medium transition-colors text-md",
              i === activeTab
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-primary"
            )}
          >
            {section.name}
          </button>
        ))}
      </div>

      {/* Right arrow */}
      <Button
        size="icon"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
        className={cn(
          "absolute right-5 z-10 rounded-full bg-[#7f7f7f] text-white hidden lg:flex",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "hover:bg-[#7f7f7f] hover:text-white"
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
