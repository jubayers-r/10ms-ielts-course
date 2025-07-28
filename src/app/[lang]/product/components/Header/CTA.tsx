import { Button } from "@/components/ui/button";

interface CtaText {
  name: string
}

interface props {
  cta_text: CtaText;
}

export default function CTA({ cta_text }: props) {
  if (!cta_text) return null;

  return (
    <div className="px-2 md:hidden lg:block block">
      <div className="text-black flex gap-3 items-center font-sans my-3">
        <p className="text-2xl font-semibold">৳1000</p>
      </div>
      <Button className="w-full relative overflow-hidden hover:bg-[#15803d] py-5.5 text-md">
        <span className="relative z-10 ">{cta_text.name}</span>
        <span className="absolute bottom-0 left-0 h-[4px] bg-[#15803d] w-full "></span>
      </Button>
    </div>
  );
}
