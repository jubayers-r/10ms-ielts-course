import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <>
      <div className="px-2 md:hidden lg:block block">
        <div className="text-black flex gap-3 items-center font-sans my-3">
          <p className="text-2xl font-semibold">৳3850</p>
          <p className="space-x-2 flex items-center">
            <span>
              {" "}
              <del className="text-lg">৳5000</del>
            </span>
            <span className=" inline-block bg-[#FB8256] text-white text-sm px-1 py-1 font-bold rounded ">
              • 1150 ৳ ছাড়
            </span>
          </p>
        </div>
        <Button className="w-full relative overflow-hidden hover:bg-[#15803d] py-5.5 text-md">
          <span className="relative z-10 ">কোর্সটি কিনুন</span>
          <span className="absolute bottom-0 left-0 h-[4px] bg-[#15803d] w-full "></span>
        </Button>
      </div>
    </>
  );
}
