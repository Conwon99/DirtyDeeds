// Icon shapes sourced verbatim from lucide-react (node_modules/lucide-react/dist/esm/icons) for accuracy.
export type IconShape =
  | { tag: "path"; d: string }
  | { tag: "circle"; cx: string; cy: string; r: string; fill?: string }
  | { tag: "rect"; x: string; y: string; width: string; height: string; rx?: string; ry?: string };

export type RoofHowItWorksStep = {
  step: string;
  title: string;
  description: string;
  icon: IconShape[];
};

export const roofHowItWorksSteps: RoofHowItWorksStep[] = [
  {
    step: "1",
    title: "Contact Us",
    description: "Call or message us with your roof cleaning needs. We'll answer your questions and get you booked in.",
    icon: [
      { tag: "path", d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" },
    ],
  },
  {
    step: "2",
    title: "Get Your Free Quote",
    description: "We assess your roof's condition and access, then provide a free, no-obligation quote — honest advice, no pushy sales.",
    icon: [
      { tag: "rect", x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" },
      { tag: "path", d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" },
      { tag: "path", d: "m9 14 2 2 4-4" },
    ],
  },
  {
    step: "3",
    title: "We Get To Work",
    description: "Safe manual moss removal, biocide treatment and gutter clearing — leaving your roof clean, treated and looking its best.",
    icon: [
      { tag: "path", d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" },
    ],
  },
];

// The 4 real before/after roof-cleaning photos used across the roof cleaning pages.
export const roofGalleryImages = ["/gal_07.jpg", "/gal_08.jpg", "/gal_09.jpg", "/gal_10.jpg"];
