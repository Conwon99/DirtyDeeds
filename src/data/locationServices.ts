import { brandName, business } from "@/data/business";
import { categories, getServicesForCategory, type ServiceCategory } from "@/data/categories";
import { locations, getNearbyLocationLinks, type LocationPage } from "@/data/locations";
import { truncateMeta } from "@/data/site";

export type LocationServiceFaq = {
  question: string;
  answer: string;
};

export type LocationServicePage = {
  locationSlug: string;
  categorySlug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  localParagraph: string;
  bodyParagraph: string;
  faqs: LocationServiceFaq[];
  location: LocationPage;
  category: ServiceCategory;
};

type CategoryContentConfig = {
  slug: string;
  serviceName: string;
  serviceNameLower: string;
  titleSuffix: string;
  contractorPhrase: string;
  nearMePhrase: string;
  metaTemplate: (displayName: string) => string;
  introTemplate: (town: string) => string;
  localTemplate: (town: string, nearby: string[]) => string;
  bodyTemplate: (town: string) => string;
  faqTemplates: (town: string) => LocationServiceFaq[];
};

const categoryConfigs: CategoryContentConfig[] = [
  {
    slug: "exterior-cleaning-ayr-kilmarnock",
    serviceName: "Exterior Cleaning",
    serviceNameLower: "exterior cleaning",
    titleSuffix: "Exterior Cleaning",
    contractorPhrase: "exterior cleaning contractor",
    nearMePhrase: "driveway cleaning near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Professional exterior cleaning in ${displayName} by ${brandName()}. Driveway, patio, decking and soft wash cleaning. Free quotes across ${business.region}.`,
      ),
    introTemplate: (town) =>
      `${brandName()} provides professional exterior cleaning in ${town} — driveway pressure washing, patio and path cleaning, decking cleaning and soft wash house washing. Weed removal, biocide treatments and free quotes available.`,
    localTemplate: (town, nearby) =>
      `Driveways and patios in ${town} often build up moss, algae, weeds and grime over time. If you are searching for ${categoryConfigs[0].nearMePhrase} or an exterior cleaning contractor near ${town}, ${brandName()} covers ${town} and nearby areas including ${nearby.slice(0, 3).join(", ") || "surrounding towns"}.`,
    bodyTemplate: (town) =>
      `From block paving restoration to patio biocide treatments, ${brandName()} helps customers in ${town} restore kerb appeal without replacing surfaces. Deep pressure washing, weed removal and professional treatments are planned around the condition of your driveway, patio or decking. Contact ${brandName()} for a free quote on exterior cleaning in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you provide driveway cleaning in ${town}?`,
        answer: `Yes. ${brandName()} provides driveway cleaning, patio cleaning and exterior washing in ${town} and nearby areas. Free quotes are available for block paving, tarmac and concrete driveways.`,
      },
      {
        question: `Can you clean patios and decking in ${town}?`,
        answer: `Yes. ${brandName()} cleans patios, paths, timber decking and composite decking in ${town}. Biocide treatments can be applied to help prevent moss and weed regrowth.`,
      },
      {
        question: `How do I get an exterior cleaning quote in ${town}?`,
        answer: `Call ${brandName()}, message on Facebook or WhatsApp, or use the contact form with details of the work and your location in ${town}. Photos help us respond quickly.`,
      },
    ],
  },
  {
    slug: "roof-cleaning-ayr-kilmarnock",
    serviceName: "Roof Cleaning",
    serviceNameLower: "roof cleaning",
    titleSuffix: "Roof Cleaning",
    contractorPhrase: "roof cleaning specialist",
    nearMePhrase: "roof cleaning near me",
    metaTemplate: (displayName) =>
      truncateMeta(
        `Roof cleaning and moss removal in ${displayName} by ${brandName()}. Scrape and biocide method, gutter clearing and fascia cleaning. Free quotes across ${business.region}.`,
      ),
    introTemplate: (town) =>
      `${brandName()} provides roof cleaning, moss removal and gutter clearing in ${town}. Manual moss removal and professional biocide treatment — safe for roof tiles with no harsh pressure washing.`,
    localTemplate: (town, nearby) =>
      `Moss and algae build-up is common on roofs in ${town} and across ${business.region}. If you need roof cleaning near ${town}, ${brandName()} serves ${town} and surrounding areas including ${nearby.slice(0, 3).join(", ") || "nearby towns"}. Gutters, fascia and soffits can be cleaned as part of a roof package.`,
    bodyTemplate: (town) =>
      `${brandName()} uses the scrape-and-biocide method for roof cleaning in ${town} — manual moss removal followed by biocide treatment to kill remaining spores and help prevent regrowth. Gutters are cleared of moss and debris. Contact ${brandName()} for a free roof cleaning quote in ${town}.`,
    faqTemplates: (town) => [
      {
        question: `Do you offer roof cleaning in ${town}?`,
        answer: `Yes. ${brandName()} provides roof cleaning, moss removal and gutter clearing in ${town} and nearby areas. Free quotes are available with before and after photos provided.`,
      },
      {
        question: `Is roof cleaning near ${town} safe for tiles?`,
        answer: `Yes. ${brandName()} uses manual moss removal and biocide treatment rather than harsh pressure washing on roof tiles. This is the professional scrape-and-biocide method recommended for Scottish roofs.`,
      },
      {
        question: `How do I get a roof cleaning quote in ${town}?`,
        answer: `Contact ${brandName()} with your location in ${town} and a brief description of the roof condition. Photos from ground level are helpful. Free quotes are available with no obligation.`,
      },
    ],
  },
];

const buildLocationServicePage = (
  location: LocationPage,
  config: CategoryContentConfig,
  category: ServiceCategory,
): LocationServicePage => {
  const town = location.name;
  const displayName = location.shortName ?? location.name;
  const nearbyNames = location.nearby;

  return {
    locationSlug: location.slug,
    categorySlug: config.slug,
    title: `${config.titleSuffix} in ${displayName} | ${brandName()}`,
    h1: `${config.titleSuffix} in ${displayName}`,
    metaDescription: config.metaTemplate(displayName),
    intro: config.introTemplate(town),
    localParagraph: config.localTemplate(town, nearbyNames),
    bodyParagraph: config.bodyTemplate(town),
    faqs: config.faqTemplates(town),
    location,
    category,
  };
};

export const locationServicePages: LocationServicePage[] = locations.flatMap((location) =>
  categoryConfigs.map((config) => {
    const category = categories.find((item) => item.slug === config.slug)!;
    return buildLocationServicePage(location, config, category);
  }),
);

export const getLocationServicePage = (locationSlug: string, categorySlug: string) =>
  locationServicePages.find(
    (page) => page.locationSlug === locationSlug && page.categorySlug === categorySlug,
  );

export const getLocationServicePagesForLocation = (locationSlug: string) =>
  locationServicePages.filter((page) => page.locationSlug === locationSlug);

export const getLocationServicePagesForCategory = (categorySlug: string) =>
  locationServicePages.filter((page) => page.categorySlug === categorySlug);

export const getNearbyLocationServiceLinks = (
  page: LocationServicePage,
): Array<{ name: string; href: string }> => {
  const nearby = getNearbyLocationLinks(page.location);
  return nearby.slice(0, 4).map((loc) => ({
    name: loc.name,
    href: `/locations/${loc.slug}/${page.categorySlug}`,
  }));
};

export const getLocationServicePath = (locationSlug: string, categorySlug: string) =>
  `/locations/${locationSlug}/${categorySlug}`;

export const getServicesForLocationServicePage = (page: LocationServicePage) =>
  getServicesForCategory(page.category);
