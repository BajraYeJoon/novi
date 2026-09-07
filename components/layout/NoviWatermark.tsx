import { SITE } from "@/config/site";

export default function NoviWatermark() {
  return (
    <div className="sticky bottom-0 z-0 -mt-8 flex h-[40vh] w-full items-center justify-center overflow-hidden bg-[#101011]">
      <p className="pointer-events-none select-none text-center lowercase text-[190px] font-bold tracking-tighter leading-none text-gray-400/20 sm:text-[260px] md:text-[340px]">
        {SITE.name}.
      </p>
    </div>
  );
}