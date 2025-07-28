import { Check } from "lucide-react";
import React from "react";

// Each feature object must have a checklist and imageUrl
interface Feature {
  checklist: string[];
  file_url: string;
  title: string;
}

interface Props {
  features: Feature[];
}

export default function ChecklistWithImageCard({ features }: Props) {
  return (
    <div className="">
      {features.map((feature, idx) => (
        <div key={idx} className="grid md:grid-cols-3 items-start p-5">
          {/* Left 2 cols */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-lg font-semibold text-gray-900">
              {feature.title}
            </p>
            {feature.checklist.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="text-[#4d86f8] w-6 h-6 mt-1" />
                <p className="text-gray-800 text-sm">{item}</p>
              </div>
            ))}
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={feature.file_url}
              alt="Feature Visual"
              className="w-full max-w-[240px] object-cover"
            />
          </div>
          {idx !== features.length - 1 && (
            <div className="border border-gray-200 md:col-span-3 mt-5 -mb-10" />
          )}
        </div>
      ))}
    </div>
  );
}
