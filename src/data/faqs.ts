import { brandName, business, citiesLabel } from "@/data/business";

export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaqs: FaqItem[] = [
  {
    question: "Do you offer free quotes?",
    answer: `Yes. Contact ${brandName()} by phone, WhatsApp or message with details of your driveway, roof or patio work and we can arrange a free, no-obligation quote.`,
  },
  {
    question: "What areas do you cover?",
    answer: `${brandName()} serves ${business.primaryCity}, ${business.secondaryCity}, Rankinston, Irvine, Troon, Prestwick, Cumnock, Mauchline, Stewarton, Kilwinning, Maybole, Galston and surrounding ${business.region} towns. Get in touch to confirm availability for your property.`,
  },
  {
    question: "What exterior cleaning services do you provide?",
    answer: `${brandName()} provides driveway cleaning, patio and path cleaning, decking cleaning, soft wash house washing, roof cleaning and moss removal, gutter clearing, fascia and soffit cleaning and biocide treatments.`,
  },
  {
    question: "How do I get started?",
    answer: `Call ${business.phoneLocal}, message us on Facebook or WhatsApp, or use the contact form with a brief description of the work and your location. Photos of the area help us respond quickly with a free quote.`,
  },
  {
    question: "Are you fully insured?",
    answer: `Yes. ${brandName()} is fully insured and provides reliable, professional exterior maintenance across ${business.region}. Customers recommend us for honest advice, competitive prices and tidy results.`,
  },
];

export const buildFaqSchema = (faqs: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
