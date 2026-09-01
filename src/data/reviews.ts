/** Total reviews on Google */
export const TOTAL_REVIEW_COUNT = 11;

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
    name: "Angela Watson",
    meta: "Google review",
    time: "verified customer",
    initial: "A",
    initialBg: "bg-orange-700",
    text: "Recently had roof moss removal, biocide treatment, gutter/fascia/sofit clean as well as render soft wash work undertaken by Jake, who kept me fully informed of the processes being undertaken. Jake was pleasant, helpful, considerate, and worked really well removing all debris, leaving the area clean and tidy. I am really happy with the work completed.",
  },
  {
    name: "James Harvey",
    meta: "Google review",
    time: "verified customer",
    initial: "J",
    initialBg: "bg-orange-600",
    text: "By far the best service and job done. So professional and friendly, very reliable and first class work done. Would highly recommend them to anyone.",
  },
  {
    name: "Ruby Stuart",
    meta: "Google review",
    time: "verified customer",
    initial: "R",
    initialBg: "bg-orange-500",
    text: "Great worker, brilliant work done every time, amazing value for money & Jake is so kind and thoughtful and very thorough in every job.",
  },
  {
    name: "Lindsay Mccrorie",
    meta: "Google review",
    time: "verified customer",
    initial: "L",
    initialBg: "bg-orange-400",
    text: "Brilliant job done. On time. Value for money. Very friendly and professional. Always does a great job. Would also recommend.",
  },
  {
    name: "Don Morrison",
    meta: "Google review",
    time: "verified customer",
    initial: "D",
    initialBg: "bg-orange-800",
    text: "Great job of cleaning gutters. Very good price for an immaculate job. Pics before and after job complete. Cannot recommend highly enough.",
  },
  {
    name: "Ashleigh Clelland",
    meta: "Google review",
    time: "verified customer",
    initial: "A",
    initialBg: "bg-orange-300",
    text: "Great service, very helpful, would definitely recommend to everyone.",
  },
];
