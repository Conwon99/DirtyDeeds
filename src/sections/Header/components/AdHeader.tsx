import { Logo } from "@/components/Logo";
import { PhoneLink } from "@/components/PhoneLink";
import { brandName } from "@/data/business";

export const AdHeader = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-[#1f1f1f] box-border caret-transparent w-full z-[100] top-0">
      <div className="relative items-center box-border caret-transparent gap-x-2 flex justify-between w-full max-w-[1204px] mx-auto px-4 py-3 md:px-5 md:py-4 lg:px-6">
        <Logo />
        <PhoneLink
          iconSrc="https://c.animaapp.com/mhooxuovKXaEfR/assets/670f86de88858acaf330ddd9_phone.svg"
          iconAlt={`Call ${brandName()}`}
          showIcon={true}
          trackingLocation="ad-header"
          className="text-white items-center bg-[#c2410c] box-border caret-transparent gap-x-2 flex justify-center px-4 py-2.5 rounded-[100px] md:px-6 md:py-3 hover:bg-[#ea580c] transition-colors"
          displayClassName="text-white text-base font-bold md:text-lg"
        />
      </div>
    </div>
  );
};
