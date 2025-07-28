interface FeatureValue {
  icon: string; 
  title: string;
  subtitle: string;
};

interface Props {
    features: FeatureValue[]
}
//   {
//     icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png",
//     title: "Fast Performance",
//     description: "Experience blazing speed and instant response across all devices.",
//   },
//   {
//     icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png",
//     title: "Secure by Design",
//     description: "Your data is safe with end-to-end encryption and secure auth.",
//   },
//   {
//     icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png",
//     title: "Actionable Insights",
//     description: "Visualize your progress with detailed analytics and reports.",
//   },
//   {
//     icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png",
//     title: "24/7 Support",
//     description: "We're here to help you anytime with real-time human support.",
//   },
// ];

export default function FeaturesCard({features}: Props) {
  return (
    <div className="max-w-6xl mx-auto bg-[#111827] rounded-sm">
      <div className="grid gap-6 md:grid-cols-2 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4  rounded-xl shadow p-6 hover:shadow-md transition "
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-10 h-10 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
