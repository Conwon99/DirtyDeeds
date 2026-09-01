import { Logo } from "@/components/Logo";
import { trackQuoteButton } from "@/utils/analytics";

export const AdHeader = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-[#1f1f1f] box-border caret-transparent w-full z-[100] top-0">
      <div className="relative items-center box-border caret-transparent gap-x-2 flex justify-between w-full max-w-[1204px] mx-auto px-4 py-3 md:px-5 md:py-4 lg:px-6">
        <Logo />
        <a
          href="/contact"
          onClick={() => trackQuoteButton("ad-header")}
          className="text-white items-center bg-[#c2410c] box-border caret-transparent gap-x-1.5 flex text-center border px-4 py-2.5 rounded-[100px] border-solid border-transparent md:px-6 md:py-3 hover:bg-[#ea580c] hover:border-[#c2410c] whitespace-nowrap flex-shrink-0 transition-colors duration-300"
        >
          <span className="text-xs font-bold md:text-base text-white">Get a Free Quote</span>
        </a>
      </div>
    </div>
  );
};
