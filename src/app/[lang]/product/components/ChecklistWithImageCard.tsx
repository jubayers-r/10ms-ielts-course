import { Check } from "lucide-react";
import React from "react";

interface ChecklistWithImageCardProps {
  checklist: string[];
  imageUrl: string;
}

export default function ChecklistWithImageCard({
  checklist,
  imageUrl,
}: ChecklistWithImageCardProps) {
  return (
    <div className="grid md:grid-cols-3 items-start gap-2 bg-white ">
      {/* Left 2 columns for checklist */}
      <div className="md:col-span-2 space-y-4">
        <p>ভিডিও লেকচার</p>
        {checklist.map((item, index) => (
          <div key={index} className="flex items-end gap-3">
            <Check className="text-[#4d86f8] w-6 h-6 mt-1" />
            <p className="text-gray-800 ">{item}</p>
          </div>
        ))}
      </div>

      {/* Right column for image */}
      <div className="flex justify-start md:justify-end">
        <img
          src={imageUrl}
          alt="Feature Visual"
          className="w-full max-w-[240px] object-cover"
        />
      </div>
    </div>
  );
}
