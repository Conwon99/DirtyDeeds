import { brandName, business } from "@/data/business";

export type LocationFaq = {
  question: string;
  answer: string;
};

export type LocationPage = {
  slug: string;
  name: string;
  shortName?: string;
  title: string;
  description: string;
  intro: string;
  nearby: string[];
  locationFaqs: LocationFaq[];
};

const makeLocationFaqs = (name: string): LocationFaq[] => [
  {
    question: `Do you cover ${name}?`,
    answer: `Yes. ${brandName()} provides driveway cleaning, roof cleaning, patio cleaning, gutter clearing and soft wash in ${name} and nearby areas across ${business.region}. Get in touch to confirm availability for your property.`,
  },
  {
    question: `What exterior work do you carry out in ${name}?`,
    answer: `${brandName()} helps customers in ${name} with driveway and patio cleaning, decking cleaning, roof moss removal, gutter clearing, biocide treatments and soft wash house washing.`,
  },
  {
    question: `How do I get a quote for work in ${name}?`,
    answer: `Contact ${brandName()} by phone, WhatsApp or the contact form with a brief description of the work and your location in ${name}. Photos of the area are helpful. Free quotes are available with no obligation.`,
  },
  {
    question: `Do you serve areas near ${name}?`,
    answer: `Yes. ${brandName()} covers ${name} and surrounding towns across ${business.region}. If you are nearby, get in touch and we can confirm coverage.`,
  },
  {
    question: `Is there an exterior cleaning contractor near ${name}?`,
    answer: `Yes. ${brandName()} is a local exterior cleaning and maintenance contractor serving ${name} and nearby areas. We provide free quotes for driveway, roof and patio work across ${business.region}.`,
  },
];

const locationEntries = [
  {
    slug: "rankinston",
    name: "Rankinston",
    title: "Exterior Cleaning in Rankinston",
    description: `${brandName()} provides driveway cleaning, roof cleaning, patio cleaning in Rankinston and surrounding Ayrshire communities. Fully insured. Free quotes.`,
    intro: `Based in Rankinston, ${brandName()} provides reliable exterior cleaning for local customers — from driveway pressure washing to roof moss removal and patio cleaning.`,
    nearby: ["Ayr", "Mauchline", "Cumnock", "Galston"],
  },
  {
    slug: "ayr",
    name: "Ayr",
    title: "Exterior Cleaning in Ayr",
    description: `${brandName()} provides driveway cleaning, roof cleaning, patio cleaning, gutter clearing in Ayr and nearby areas. Fully insured. Free quotes.`,
    intro: `For customers in Ayr, ${brandName()} provides professional driveway, patio and roof cleaning with competitive prices, biocide treatments and tidy results.`,
    nearby: ["Prestwick", "Troon", "Mauchline", "Kilmarnock"],
  },
  {
    slug: "kilmarnock",
    name: "Kilmarnock",
    title: "Exterior Cleaning in Kilmarnock",
    description: `${brandName()} provides exterior cleaning, roof moss removal, driveway cleaning and gutter clearing in Kilmarnock and East Ayrshire. Fully insured. Free quotes.`,
    intro: `${brandName()} helps homeowners and businesses in Kilmarnock with driveway cleaning, roof scraping, patio restoration and gutter clearing.`,
    nearby: ["Stewarton", "Galston", "Cumnock", "Irvine"],
  },
  {
    slug: "irvine",
    name: "Irvine",
    title: "Exterior Cleaning in Irvine",
    description: `${brandName()} provides driveway, patio and roof cleaning in Irvine and North Ayrshire. Professional biocide treatments. Free quotes.`,
    intro: `Customers in Irvine choose ${brandName()} for driveway transformations, patio cleaning and roof moss removal across North Ayrshire.`,
    nearby: ["Kilwinning", "Troon", "Stewarton", "Kilmarnock"],
  },
  {
    slug: "troon",
    name: "Troon",
    title: "Exterior Cleaning in Troon",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Troon and the Ayrshire coast. Free quotes available.`,
    intro: `${brandName()} serves Troon with driveway, patio, decking and roof cleaning — helping coastal properties stay clean, safe and well maintained.`,
    nearby: ["Prestwick", "Ayr", "Irvine", "Kilmarnock"],
  },
  {
    slug: "prestwick",
    name: "Prestwick",
    title: "Exterior Cleaning in Prestwick",
    description: `${brandName()} provides driveway cleaning, soft wash and roof cleaning in Prestwick and South Ayrshire. Fully insured. Free quotes.`,
    intro: `From Prestwick driveways to patio and roof work, ${brandName()} delivers professional exterior maintenance with biocide treatments and competitive local pricing.`,
    nearby: ["Ayr", "Troon", "Maybole", "Mauchline"],
  },
  {
    slug: "cumnock",
    name: "Cumnock",
    title: "Exterior Cleaning in Cumnock",
    description: `${brandName()} provides driveway, patio and roof cleaning in Cumnock and East Ayrshire. Reliable local service. Free quotes.`,
    intro: `${brandName()} covers Cumnock with the same exterior cleaning services offered across Ayrshire — moss removal, pressure washing and biocide treatments.`,
    nearby: ["Mauchline", "Galston", "Kilmarnock", "Rankinston"],
  },
  {
    slug: "mauchline",
    name: "Mauchline",
    title: "Exterior Cleaning in Mauchline",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Mauchline and surrounding Ayrshire. Free quotes.`,
    intro: `Properties in Mauchline benefit from ${brandName()}'s local exterior cleaning — driveways, patios and roofs kept clean with fully insured, reliable service.`,
    nearby: ["Ayr", "Cumnock", "Rankinston", "Prestwick"],
  },
  {
    slug: "stewarton",
    name: "Stewarton",
    title: "Exterior Cleaning in Stewarton",
    description: `${brandName()} provides driveway cleaning, roof moss removal and patio cleaning in Stewarton and East Ayrshire. Free quotes.`,
    intro: `${brandName()} serves Stewarton with professional driveway, patio and roof cleaning for local properties.`,
    nearby: ["Kilmarnock", "Irvine", "Galston", "Kilwinning"],
  },
  {
    slug: "kilwinning",
    name: "Kilwinning",
    title: "Exterior Cleaning in Kilwinning",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Kilwinning and North Ayrshire. Free quotes.`,
    intro: `Customers in Kilwinning rely on ${brandName()} for driveway and patio restoration, roof cleaning and gutter clearing across the local area.`,
    nearby: ["Irvine", "Stewarton", "Troon", "Kilmarnock"],
  },
  {
    slug: "maybole",
    name: "Maybole",
    title: "Exterior Cleaning in Maybole",
    description: `${brandName()} provides driveway, patio and roof cleaning in Maybole and South Ayrshire. Fully insured. Free quotes.`,
    intro: `${brandName()} helps Maybole properties look their best with driveway cleaning, biocide treatments and roof moss removal.`,
    nearby: ["Ayr", "Prestwick", "Cumnock", "Mauchline"],
  },
  {
    slug: "galston",
    name: "Galston",
    title: "Exterior Cleaning in Galston",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Galston and East Ayrshire. Free quotes.`,
    intro: `${brandName()} covers Galston with driveway, patio, decking and roof cleaning for homes across East Ayrshire.`,
    nearby: ["Kilmarnock", "Stewarton", "Cumnock", "Rankinston"],
  },
];

export const locations: LocationPage[] = locationEntries.map((entry) => ({
  ...entry,
  locationFaqs: makeLocationFaqs(entry.name),
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((loc) => loc.name === name))
    .filter((loc): loc is LocationPage => Boolean(loc));

export const getLocationPath = (slug: string) => `/locations/${slug}`;
