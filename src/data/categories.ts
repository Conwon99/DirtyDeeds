import { brandName, business, citiesLabel } from "@/data/business";
import { services, type ServicePage } from "@/data/services";

export type ServiceCategory = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  localParagraph: string;
  image: string;
  imageAlt: string;
  serviceSlugs: string[];
};

export const categories: ServiceCategory[] = [
  {
    slug: "exterior-cleaning-ayr-kilmarnock",
    name: "Exterior Cleaning",
    title: `Exterior Cleaning in ${citiesLabel()}`,
    description: `Professional driveway, patio, decking and soft wash cleaning in ${citiesLabel()} and across ${business.region}. Weed removal, pressure washing and biocide treatments. Free quotes.`,
    intro: `${brandName()} deep cleans driveways, patios, paths, decking and exterior surfaces across ${business.region}. From block paving restoration to soft wash house washing, work is completed with professional equipment, biocide treatments where needed and free quotes.`,
    localParagraph: `Properties across ${business.primaryCity}, ${business.secondaryCity} and surrounding Ayrshire towns often deal with moss, algae, weeds and years of built-up grime on driveways and patios. ${brandName()} works locally with competitive prices and reliable, fully insured service.`,
    image: "/gal_01.jpg",
    imageAlt: "Driveway pressure washing completed by Dirty Deeds in Ayrshire",
    serviceSlugs: [
      "driveway-cleaning",
      "patio-path-cleaning",
      "decking-composite-cleaning",
      "soft-wash-house-washing",
    ],
  },
  {
    slug: "roof-cleaning-ayr-kilmarnock",
    name: "Roof Cleaning",
    title: `Roof Cleaning in ${citiesLabel()}`,
    description: `Roof cleaning, moss removal, gutter clearing and fascia cleaning in ${citiesLabel()} and ${business.region}. Scrape and biocide method. Fully insured. Free quotes.`,
    intro: `Moss, algae and lichen can affect roof appearance and long-term condition. ${brandName()} provides safe roof cleaning using manual moss removal and professional biocide treatment — no harsh pressure washing on tiles. Gutter clearing and fascia cleaning can be included.`,
    localParagraph: `Scottish weather means moss build-up is common on roofs across ${business.region}. ${brandName()} serves ${business.primaryCity}, ${business.secondaryCity} and nearby towns with scrape-and-biocide roof cleaning, gutter clearing and treatments to help prevent regrowth.`,
    image: "/gal_04.jpg",
    imageAlt: "Roof cleaning and moss removal by Dirty Deeds in Ayrshire",
    serviceSlugs: [
      "roof-cleaning-moss-removal",
      "gutter-clearing-fascia-soffit",
      "biocide-treatments",
    ],
  },
  {
    slug: "lawn-garden-care-ayr-kilmarnock",
    name: "Lawn & Garden Care",
    title: `Lawn & Garden Care in ${citiesLabel()}`,
    description: `Grass cutting, lawn care and garden maintenance in ${citiesLabel()} and across ${business.region}. Reliable local service. Fully insured. Free quotes.`,
    intro: `${brandName()} keeps lawns and gardens looking tidy across ${business.region}. Grass cutting, lawn care and garden maintenance help properties stay presentable through the season — with the same reliable service customers expect from our exterior cleaning work.`,
    localParagraph: `From ${business.primaryCity} to ${business.secondaryCity} and surrounding villages, gardens need regular attention through spring and summer. ${brandName()} combines exterior cleaning with lawn and garden care so customers can book one local team for multiple jobs.`,
    image: "/gal_05.jpg",
    imageAlt: "Lawn care and garden maintenance by Dirty Deeds in Ayrshire",
    serviceSlugs: ["grass-cutting", "lawn-care-garden-maintenance"],
  },
];

export const getCategoryBySlug = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  categories.find((category) => category.serviceSlugs.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): ServicePage[] =>
  category.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is ServicePage => Boolean(service));

export const getRelatedServices = (serviceSlug: string): ServicePage[] => {
  const category = getCategoryForService(serviceSlug);
  if (!category) return [];
  return getServicesForCategory(category).filter((service) => service.slug !== serviceSlug);
};

export const getFormServiceOptions = (): string[] => [
  ...categories.map((category) => category.name),
  ...services.filter((service) => service.slug !== "free-quotes").map((service) => service.shortTitle),
  "Other / Not Sure",
];
