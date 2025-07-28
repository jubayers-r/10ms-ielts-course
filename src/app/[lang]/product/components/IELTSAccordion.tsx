"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

interface AccordionData {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Props {
  data: AccordionData[];
}

export default function IELTSAccordion({ data }: Props) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <Accordion
      type="single"
      collapsible
      value={openItem || ""}
      onValueChange={(val) => setOpenItem(val)}
      className="w-full px-4 py-2 "
    >
      {data.map((item, idx) => (
        <div key={item.id}>
          <AccordionItem value={item.id}>
            <AccordionTrigger className="flex justify-between items-center text-left gap-2 py-4">
              <ul
                dangerouslySetInnerHTML={{ __html: item.title }}
                className="text-lg font-semibold"
              />
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-2 text-gray-700">
              <div
                className="prose max-w-none text-base space-y-5 "
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </AccordionContent>
          </AccordionItem>
          {idx !== data.length - 1 && (
            <div className="border-b border-dashed border-gray-200" />
          )}
        </div>
      ))}
    </Accordion>
  );
}
