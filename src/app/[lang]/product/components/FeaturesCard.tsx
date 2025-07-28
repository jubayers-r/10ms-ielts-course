import { Check } from "lucide-react";

interface FeatureValue {
  icon?: string;
  title?: string;
  subtitle?: string;
  text?: string;
}

interface Props {
  features: FeatureValue[];
}

export default function FeaturesCard({ features }: Props) {
  return (
    <div className="max-w-6xl mx-auto  ">
      <div className="grid md:grid-cols-2 ">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-4">
            {feature.icon !== "0" ? (
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Check className="w-6 h-6 text-[#4d86f8]" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p
                className={` mt-1 ${
                  feature.subtitle ? "text-gray-400 text-sm " : "text-black"
                }`}
              >
                {feature.subtitle || feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
