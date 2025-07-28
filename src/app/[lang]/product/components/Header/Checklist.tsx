import { Checklist as ChecklistItem } from "@/app/[lang]/product/types";

type Props = {
  data: ChecklistItem[];
};

export default function Checklist({ data }: Props) {
  return (
    <div className="absolute top-full left-0  p-3 space-y-2 bg-white border-x shadow w-full">
      <p className="font-semibold text-xl mb-3 text-black">
        এই কোর্সে যা থাকছে
      </p>
      {data.map((item) => (
        <div key={item.id} className="flex items-center gap-3">
          <img src={item.icon} alt="Checklist Icon" className="w-5 h-5" />
          <span style={{ color: item.color }}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}
