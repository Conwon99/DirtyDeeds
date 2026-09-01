import { useEffect } from "react";
import { trackFormStart } from "@/utils/analytics";
import { business } from "@/data/business";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgaekokg";

export const AdQuoteFormSection = () => {
  useEffect(() => {
    const form = document.querySelector('form[name="wf-form-Ad-Quote-Form"]') as HTMLFormElement;
    const errorMessage = document.querySelector('[aria-label="Ad Quote Form failure"]') as HTMLElement;

    if (form) {
      let formStarted = false;
      const handleFormStart = () => {
        if (!formStarted) {
          formStarted = true;
          trackFormStart("ad-quote");
        }
      };

      const formFields = form.querySelectorAll("input, textarea, select");
      formFields.forEach((field) => {
        field.addEventListener("focus", handleFormStart, { once: true });
        field.addEventListener("click", handleFormStart, { once: true });
      });
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (errorMessage) errorMessage.classList.add("hidden");

        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const formData = new FormData(form);
        formData.append("websiteUrl", business.siteUrl.replace("https://", "").replace("http://", ""));

        try {
          const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            form.reset();
            window.location.href = "/ads/roof-cleaning-ayrshire/thank-you";
          } else {
            throw new Error("Form submission failed");
          }
        } catch (error) {
          if (errorMessage) {
            errorMessage.classList.remove("hidden");
            errorMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }
      });
    }
  }, []);

  return (
    <div className="box-border caret-transparent mb-[50px] md:mb-[70px]">
      <div className="bg-[#c2410c] box-border caret-transparent p-4 sm:p-5 rounded-[20px] md:p-10 max-w-[800px] mx-auto border-2 border-[#c2410c] shadow-lg">
        <h2 className="text-white text-2xl font-bold box-border caret-transparent leading-[30px] mb-5 text-center md:text-4xl md:leading-[43.2px]">
          Get Your Free Roof Cleaning Quote
        </h2>
        <form
          name="wf-form-Ad-Quote-Form"
          aria-label="Ad Quote Form"
          action={FORMSPREE_ENDPOINT}
          method="POST"
          encType="multipart/form-data"
          className="box-border caret-transparent"
        >
          <input type="hidden" name="service" value="Roof Cleaning" />
          <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
            <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
              Name
            </label>
            <input
              name="name"
              placeholder="Your name"
              type="text"
              required
              className="text-gray-900 text-base bg-white box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            />
          </div>
          <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
            <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
              Email
            </label>
            <input
              name="email"
              placeholder="your.email@example.com"
              type="email"
              required
              className="text-gray-900 text-base bg-white box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            />
          </div>
          <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
            <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
              Phone
            </label>
            <input
              name="phone"
              placeholder="07894 663151"
              type="tel"
              required
              className="text-gray-900 text-base bg-white box-border caret-transparent block h-12 leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            />
          </div>
          <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
            <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your roof cleaning enquiry..."
              rows={6}
              required
              className="text-gray-900 text-base bg-white box-border caret-transparent block leading-[25.6px] align-middle w-full border-2 border-white mb-2.5 px-5 py-2.5 rounded-[20px] border-solid resize-vertical focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            />
          </div>
          <div className="text-base items-start box-border caret-transparent flex-col w-full mb-5 md:text-lg md:items-center md:flex-row">
            <label className="text-white text-base font-semibold box-border caret-transparent block mb-[5px] md:text-lg">
              Upload Photos (optional)
            </label>
            <input
              name="photos"
              type="file"
              accept="image/*"
              multiple
              className="text-white text-sm bg-white/10 box-border caret-transparent block w-full border-2 border-white border-dashed mb-2.5 px-5 py-3 rounded-[20px] cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white file:text-gray-900 file:font-semibold file:cursor-pointer"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="text-[#c2410c] text-base font-bold bg-white box-border caret-transparent leading-[24px] text-center text-nowrap w-full border-2 border-white px-6 py-3 rounded-[50px] border-solid md:text-xl md:leading-[28px] md:px-8 md:py-4 hover:bg-gray-100 transition-all duration-300 min-h-[56px] md:min-h-[64px] shadow-lg"
          />
        </form>
        <div className="box-border caret-transparent mt-[15px]">
          <div
            role="region"
            aria-label="Ad Quote Form failure"
            className="text-white bg-[#ea580c] box-border caret-transparent hidden text-center p-[15px] rounded-[20px]"
          >
            <div className="box-border caret-transparent">
              Oops! Something went wrong while submitting the form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
