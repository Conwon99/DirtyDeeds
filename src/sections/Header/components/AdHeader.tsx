import { Logo } from "@/components/Logo";
import { trackQuoteButton } from "@/utils/analytics";

export const AdHeader = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-[#1f1f1f] box-border caret-transparent w-full z-[100] top-0">
      <div className="relative items-center box-border caret-transparent gap-x-2 flex justify-between w-full max-w-[1204px] mx-auto px-4 py-3 md:px-5 md:py-4 lg:px-6">
        <Logo />
        <a
          href="#quote-form"
          onClick={() => trackQuoteButton("ad-header")}
          className="text-white items-center bg-[#c2410c] box-border caret-transparent flex justify-center px-4 py-2.5 rounded-[100px] border border-transparent md:px-6 md:py-3 hover:bg-[#ea580c] transition-colors whitespace-nowrap"
        >
          <span className="text-sm font-bold md:text-lg text-white">Get a Free Quote</span>
        </a>
      </div>
    </div>
  );
};
