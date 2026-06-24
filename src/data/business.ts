export const business = {
  businessName: "Dirty Deeds Exterior Maintenance",
  alternateName: "Dirty Deeds",
  tagline:
    "Professional exterior cleaning specialist — driveways, patios, gutters, house washing and roof cleaning across Ayrshire.",
  gbpCategory: "Home Improvement",
  phone: "+44 7894 663151",
  phoneDisplay: "+44 7894 663151",
  phoneLocal: "07894 663151",
  trackingPhone: "+44 7445 115491",
  trackingPhoneLocal: "07445 115491",
  email: "hello@dirtydeedsexteriormaintenance.co.uk",
  siteUrl: "https://dirtydeedsayrshire.co.uk",
  facebookUrl: "https://www.facebook.com/profile.php?id=100090370285579",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dirty+Deeds+Exterior+Maintenance+Rankinston+Ayrshire",
  whatsappUrl: "https://wa.me/447894663151",
  primaryCity: "Ayr",
  secondaryCity: "Kilmarnock",
  region: "Ayrshire",
  geoRegion: "GB-SCT",
  address: {
    addressLocality: "Rankinston",
    addressRegion: "Ayrshire",
    addressCountry: "GB",
  },
  mapCenter: [55.48, -4.45] as [number, number],
  serviceAreaPolygon: [
    [55.2, -4.8],
    [55.2, -4.0],
    [55.7, -4.0],
    [55.7, -4.8],
    [55.2, -4.8],
  ] as [number, number][],
  assets: {
    hero: "/hero.jpg",
    logo: "/logo.png",
    about: "/about.jpg",
    gallery: [
      "/gal_01.jpg",
      "/gal_02.jpg",
      "/gal_03.jpg",
      "/gal_04.jpg",
      "/gal_05.jpg",
      "/gal_06.jpg",
    ],
  },
  serviceTypes: [
    "Driveway cleaning",
    "Patio and path cleaning",
    "Decking and composite decking cleaning",
    "Soft wash and house washing",
    "Roof cleaning and moss removal",
    "Gutter clearing",
    "Fascia and soffit cleaning",
    "Biocide treatments",
  ],
  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  googleAnalyticsId: "",
  googleAdsId: "",
};

export const brandName = () => business.alternateName;
export const fullBusinessName = () => business.businessName;
export const citiesLabel = () => business.region;

export const homepageTitle = () =>
  `${business.businessName} | Exterior Cleaning in ${citiesLabel()}`;

export const homepageDescription = () =>
  `${business.alternateName} provides driveway cleaning, roof cleaning, patio cleaning, gutter clearing and soft wash in ${citiesLabel()}. Fully insured. Free quotes.`;

export const absoluteUrl = (path = ""): string => {
  if (!path) return `${business.siteUrl}/`;
  return `${business.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export const truncateMeta = (text: string, maxLength = 155): string => {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).replace(/[\s,.;:-]+$/, "")}…`;
};

export const SITE_URL = business.siteUrl;
