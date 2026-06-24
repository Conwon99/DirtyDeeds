/** Total reviews on Facebook — carousel shows a sample */
export const TOTAL_REVIEW_COUNT = 9;

export type CustomerReview = {
  name: string;
  meta: string;
  time: string;
  initial: string;
  initialBg: string;
  text: string;
};

export const reviews: CustomerReview[] = [
  {
    name: "Xgill Xmcb",
    meta: "Facebook review",
    time: "recommended",
    initial: "X",
    initialBg: "bg-orange-700",
    text: "Very impressed with the work done to my home roof all clean and treated, gutters replaced, driveway all cleaned. Highly recommended these guys — great contact as well. Thanks again Jake.",
  },
  {
    name: "Stephanie Murphy",
    meta: "Facebook review",
    time: "recommended",
    initial: "S",
    initialBg: "bg-orange-500",
    text: "Jake came and power washed, deep cleaned and re-sanded our driveway, AstroTurf and decking, made a fab job and good prices, highly recommend.",
  },
  {
    name: "Janette Stewart",
    meta: "Facebook review",
    time: "recommended",
    initial: "J",
    initialBg: "bg-orange-600",
    text: "I give Dirty Deeds a 5 star rating. After the first power wash clean, Jake followed up with a soft wash, including all areas, windows, doors and fencing. Every area was safely chemically treated to stop weeds coming back and is looking absolutely perfect. Many thanks.",
  },
  {
    name: "Lesley Tasker",
    meta: "Facebook review",
    time: "recommended",
    initial: "L",
    initialBg: "bg-orange-400",
    text: "Recently power washed my driveway — it now looks like new. Was amazed with results. Reliable, trustworthy, very pleasant and arrived on time. Would recommend this company.",
  },
];
