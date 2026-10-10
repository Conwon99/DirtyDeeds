import { brandName } from "@/data/business";

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
  councilArea: string;
  postcodes: string;
  areasCovered: string[];
  localContext: string;
  serviceFocus: string;
  localFaq: LocationFaq;
  locationFaqs: LocationFaq[];
};

type LocationEntry = Omit<LocationPage, "locationFaqs">;

const makeLocationFaqs = (entry: LocationEntry): LocationFaq[] => [
  {
    question: `Which parts of ${entry.name} do you cover?`,
    answer: `${brandName()} covers all of ${entry.name} (${entry.postcodes}), including ${entry.areasCovered.join(", ")}. Nearby towns such as ${entry.nearby.slice(0, 3).join(", ")} are covered too.`,
  },
  entry.localFaq,
  {
    question: `How do I get a quote for work in ${entry.name}?`,
    answer: `Call, WhatsApp or use the contact form with your address in ${entry.name} and a few photos of the area. Quotes are free and there is no obligation.`,
  },
];

const locationEntries: LocationEntry[] = [
  {
    slug: "rankinston",
    name: "Rankinston",
    title: "Exterior Cleaning in Rankinston",
    description: `${brandName()} provides driveway cleaning, roof cleaning, patio cleaning in Rankinston and surrounding Ayrshire communities. Fully insured. Free quotes.`,
    intro: `Based in Rankinston, ${brandName()} provides reliable exterior cleaning for local customers — from driveway pressure washing to roof moss removal and patio cleaning.`,
    nearby: ["Ayr", "Mauchline", "Cumnock", "Galston"],
    councilArea: "East Ayrshire",
    postcodes: "KA6",
    areasCovered: ["Rankinston village", "Polnessan", "Drongan", "Patna", "Ochiltree"],
    localContext: `Rankinston is a small former mining village in East Ayrshire and home base for ${brandName()}. Most homes here are terraced and semi-detached houses on open, exposed ground, so roofs and gutters take the full force of the wind and rain, and moss settles quickly on north-facing slopes.`,
    serviceFocus: "Roof moss removal and gutter clearing are the most common jobs locally, along with path and driveway cleaning where weeds have taken hold in the joints. Being local means short-notice and smaller jobs are easy to fit in.",
    localFaq: {
      question: `Is ${brandName()} based in Rankinston?`,
      answer: `Yes. ${brandName()} is run from Rankinston by Jake, so Rankinston and the surrounding villages are right on the doorstep.`,
    },
  },
  {
    slug: "ayr",
    name: "Ayr",
    title: "Exterior Cleaning in Ayr",
    description: `${brandName()} provides driveway cleaning, roof cleaning, patio cleaning, gutter clearing in Ayr and nearby areas. Fully insured. Free quotes.`,
    intro: `For customers in Ayr, ${brandName()} provides professional driveway, patio and roof cleaning with competitive prices, biocide treatments and tidy results.`,
    nearby: ["Prestwick", "Troon", "Mauchline", "Kilmarnock"],
    councilArea: "South Ayrshire",
    postcodes: "KA7 and KA8",
    areasCovered: ["Alloway", "Doonfoot", "Belmont", "Forehill", "Masonhill", "Whitletts", "Heathfield"],
    localContext: "Ayr mixes large sandstone villas in areas like Alloway and the seafront with post-war and modern estates across the rest of the town. Block paving driveways are common in the newer estates, and homes near the shore get salt-laden wind that speeds up algae and green staining on render and paths.",
    serviceFocus: "Block paving driveway restoration is the most requested job in Ayr: weed removal, deep pressure washing and a biocide treatment to slow regrowth. Recent work includes a full block paving driveway in Ayr and a driveway, path and patio restoration in Doonfoot.",
    localFaq: {
      question: "Have you done driveway cleaning in Ayr before?",
      answer: "Yes. Recent Ayr jobs include a block paving driveway restoration and a driveway, path and patio clean in Doonfoot. Before and after photos are on the projects pages.",
    },
  },
  {
    slug: "kilmarnock",
    name: "Kilmarnock",
    title: "Exterior Cleaning in Kilmarnock",
    description: `${brandName()} provides exterior cleaning, roof moss removal, driveway cleaning and gutter clearing in Kilmarnock and East Ayrshire. Fully insured. Free quotes.`,
    intro: `${brandName()} helps homeowners and businesses in Kilmarnock with driveway cleaning, roof scraping, patio restoration and gutter clearing.`,
    nearby: ["Stewarton", "Galston", "Cumnock", "Irvine"],
    councilArea: "East Ayrshire",
    postcodes: "KA1, KA2 and KA3",
    areasCovered: ["Riccarton", "Bellfield", "Onthank", "Shortlees", "Kilmaurs", "Hurlford", "Crosshouse"],
    localContext: "Kilmarnock is the largest town in East Ayrshire, with a wide mix of Victorian sandstone, post-war housing and newer estates on the edges of town. Tarmac and concrete driveways are as common as block paving here, and older properties often have gutters choked with moss washed down from the roof.",
    serviceFocus: "Driveway and patio cleaning, gutter clearing and roof moss removal are all common in Kilmarnock. Roof and gutter work can be booked as one visit so the gutters are cleared after the moss comes off the roof.",
    localFaq: {
      question: "Do you clean tarmac and concrete driveways in Kilmarnock?",
      answer: `Yes. As well as block paving, ${brandName()} cleans tarmac and concrete driveways, adjusting pressure and treatment to the surface so it is not damaged.`,
    },
  },
  {
    slug: "irvine",
    name: "Irvine",
    title: "Exterior Cleaning in Irvine",
    description: `${brandName()} provides driveway, patio and roof cleaning in Irvine and North Ayrshire. Professional biocide treatments. Free quotes.`,
    intro: `Customers in Irvine choose ${brandName()} for driveway transformations, patio cleaning and roof moss removal across North Ayrshire.`,
    nearby: ["Kilwinning", "Troon", "Stewarton", "Kilmarnock"],
    councilArea: "North Ayrshire",
    postcodes: "KA11 and KA12",
    areasCovered: ["Girdle Toll", "Bourtreehill", "Broomlands", "Castlepark", "Dreghorn", "Springside"],
    localContext: "Irvine was designated a New Town in 1966, so a large share of its homes were built in the 1970s and 80s with monoblock driveways, slabbed paths and roughcast or rendered walls. After decades of west-coast weather, those surfaces often show moss in the joints and green algae on the render.",
    serviceFocus: "Driveway and path restoration and soft wash cleaning of render and roughcast suit Irvine's housing well. Soft washing uses low pressure and a cleaning solution, so it lifts algae without blasting the finish off the walls.",
    localFaq: {
      question: "Can you clean roughcast or render on Irvine houses?",
      answer: "Yes. Roughcast and render are cleaned with a soft wash, a low-pressure biocide clean that kills algae and lichen without damaging the wall finish.",
    },
  },
  {
    slug: "troon",
    name: "Troon",
    title: "Exterior Cleaning in Troon",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Troon and the Ayrshire coast. Free quotes available.`,
    intro: `${brandName()} serves Troon with driveway, patio, decking and roof cleaning — helping coastal properties stay clean, safe and well maintained.`,
    nearby: ["Prestwick", "Ayr", "Irvine", "Kilmarnock"],
    councilArea: "South Ayrshire",
    postcodes: "KA10",
    areasCovered: ["Barassie", "Troon town centre", "Troon seafront", "Loans"],
    localContext: "Troon is a coastal town known for Royal Troon golf course, with many detached and semi-detached homes close to the shore in Troon and Barassie. Salt spray and constant sea wind leave a film on render, windows and paving, and shaded patios and decking can turn green and slippery quickly.",
    serviceFocus: "Patio and decking cleaning and soft washing of render are especially useful in Troon. A biocide treatment after cleaning helps keep algae back for longer on exposed coastal properties.",
    localFaq: {
      question: "Does the sea air in Troon affect exterior cleaning?",
      answer: "Coastal homes tend to build up algae and grime faster. Following a clean with a biocide treatment helps the results last longer, and soft washing is gentler on render that takes a beating from the weather.",
    },
  },
  {
    slug: "prestwick",
    name: "Prestwick",
    title: "Exterior Cleaning in Prestwick",
    description: `${brandName()} provides driveway cleaning, soft wash and roof cleaning in Prestwick and South Ayrshire. Fully insured. Free quotes.`,
    intro: `From Prestwick driveways to patio and roof work, ${brandName()} delivers professional exterior maintenance with biocide treatments and competitive local pricing.`,
    nearby: ["Ayr", "Troon", "Maybole", "Mauchline"],
    councilArea: "South Ayrshire",
    postcodes: "KA9",
    areasCovered: ["Prestwick town centre", "Glenburn", "Prestwick seafront", "Monkton"],
    localContext: "Prestwick sits on the coast between Ayr and Troon, with homes running from the seafront promenade inland to Glenburn and out towards Monkton and the airport. Like the rest of the Ayrshire coast, properties here face wind-driven rain and sea air that encourage moss on roofs and algae on paving.",
    serviceFocus: "Driveway cleaning, soft wash house washing and roof cleaning are all regularly requested in Prestwick. Many customers combine a driveway and path clean with a soft wash so the whole frontage is done in one visit.",
    localFaq: {
      question: "Can I book a driveway clean and soft wash together in Prestwick?",
      answer: "Yes. Combining a driveway or path clean with a soft wash of the walls in one visit is common, and one quote can cover both.",
    },
  },
  {
    slug: "cumnock",
    name: "Cumnock",
    title: "Exterior Cleaning in Cumnock",
    description: `${brandName()} provides driveway, patio and roof cleaning in Cumnock and East Ayrshire. Reliable local service. Free quotes.`,
    intro: `${brandName()} covers Cumnock with the same exterior cleaning services offered across Ayrshire — moss removal, pressure washing and biocide treatments.`,
    nearby: ["Mauchline", "Galston", "Kilmarnock", "Rankinston"],
    councilArea: "East Ayrshire",
    postcodes: "KA18",
    areasCovered: ["Cumnock town centre", "Auchinleck", "Lugar", "New Cumnock"],
    localContext: "Cumnock is a former mining and market town in East Ayrshire, close to Dumfries House. Housing is a mix of older stone properties and post-war estates, and the higher, wetter ground inland means roofs and gutters collect moss faster than on the coast.",
    serviceFocus: "Roof moss removal with the scrape-and-biocide method and gutter clearing are the key services for Cumnock homes. Fascia and soffit cleaning can be added on the same visit.",
    localFaq: {
      question: "Do you cover Auchinleck and New Cumnock as well as Cumnock?",
      answer: "Yes. Cumnock is covered along with nearby Auchinleck, Lugar and New Cumnock.",
    },
  },
  {
    slug: "mauchline",
    name: "Mauchline",
    title: "Exterior Cleaning in Mauchline",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Mauchline and surrounding Ayrshire. Free quotes.`,
    intro: `Properties in Mauchline benefit from ${brandName()}'s local exterior cleaning — driveways, patios and roofs kept clean with fully insured, reliable service.`,
    nearby: ["Ayr", "Cumnock", "Rankinston", "Prestwick"],
    councilArea: "East Ayrshire",
    postcodes: "KA5",
    areasCovered: ["Mauchline village", "Catrine", "Sorn", "Failford"],
    localContext: "Mauchline is a village in East Ayrshire best known for its links to Robert Burns. Older sandstone cottages and terraces sit alongside newer housing on the edges of the village, and the surrounding farmland and trees mean plenty of moss and leaf debris on roofs and in gutters.",
    serviceFocus: "Gutter clearing, roof moss removal and patio cleaning are the most relevant services here. Sandstone and older surfaces are cleaned with care, using lower pressure and treatments where a harsh pressure wash would cause damage.",
    localFaq: {
      question: "Is pressure washing safe on older stone paths in Mauchline?",
      answer: "Older stone is cleaned with lower pressure and a biocide treatment where needed, rather than full-power pressure washing, so the surface is not damaged.",
    },
  },
  {
    slug: "stewarton",
    name: "Stewarton",
    title: "Exterior Cleaning in Stewarton",
    description: `${brandName()} provides driveway cleaning, roof moss removal and patio cleaning in Stewarton and East Ayrshire. Free quotes.`,
    intro: `${brandName()} serves Stewarton with professional driveway, patio and roof cleaning for local properties.`,
    nearby: ["Kilmarnock", "Irvine", "Galston", "Kilwinning"],
    councilArea: "East Ayrshire",
    postcodes: "KA3",
    areasCovered: ["Stewarton town centre", "Dunlop", "Kilmaurs", "Fenwick"],
    localContext: "Stewarton is a commuter town between Kilmarnock and Glasgow with a station on the Glasgow line. Much of its housing is modern, with large block paving driveways, patios and composite decking that show weeds and green staining within a few years.",
    serviceFocus: "Driveway, patio and decking cleaning are the main jobs for Stewarton homes, often with re-sanding of block paving joints after cleaning and a biocide treatment to slow regrowth.",
    localFaq: {
      question: "Do you re-sand block paving after cleaning in Stewarton?",
      answer: "Yes. Re-sanding the joints after a deep clean can be included in the quote. It helps lock the blocks in place and slows weeds coming back.",
    },
  },
  {
    slug: "kilwinning",
    name: "Kilwinning",
    title: "Exterior Cleaning in Kilwinning",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Kilwinning and North Ayrshire. Free quotes.`,
    intro: `Customers in Kilwinning rely on ${brandName()} for driveway and patio restoration, roof cleaning and gutter clearing across the local area.`,
    nearby: ["Irvine", "Stewarton", "Troon", "Kilmarnock"],
    councilArea: "North Ayrshire",
    postcodes: "KA13",
    areasCovered: ["Pennyburn", "Whitehirst Park", "Blacklands", "Kilwinning town centre"],
    localContext: "Kilwinning grew rapidly as part of the Irvine New Town area, so estates like Pennyburn and Whitehirst Park are full of 1970s-90s homes with monoblock driveways, slabbed paths and rendered walls. Those surfaces are now old enough to need a proper deep clean rather than a quick hose down.",
    serviceFocus: "Driveway and path restoration, soft wash render cleaning and gutter clearing are the most useful services for Kilwinning properties.",
    localFaq: {
      question: "Can an old monoblock driveway in Kilwinning be restored?",
      answer: "Usually, yes. Weed removal, a deep pressure wash and a biocide treatment bring most older monoblock driveways back to a much cleaner finish without replacing them.",
    },
  },
  {
    slug: "maybole",
    name: "Maybole",
    title: "Exterior Cleaning in Maybole",
    description: `${brandName()} provides driveway, patio and roof cleaning in Maybole and South Ayrshire. Fully insured. Free quotes.`,
    intro: `${brandName()} helps Maybole properties look their best with driveway cleaning, biocide treatments and roof moss removal.`,
    nearby: ["Ayr", "Prestwick", "Cumnock", "Mauchline"],
    councilArea: "South Ayrshire",
    postcodes: "KA19",
    areasCovered: ["Maybole town", "Minishant", "Kirkmichael", "Crosshill"],
    localContext: "Maybole is a historic town in Carrick on the A77, known for Maybole Castle and its older stone buildings. Many homes here and in nearby villages like Kirkmichael and Crosshill are older properties with slate roofs and stone walls that hold moisture and grow moss.",
    serviceFocus: "Roof moss removal with the scrape-and-biocide method suits Maybole's older roofs well, as it avoids pressure washing that can damage slates. Gutter and path cleaning are often added on.",
    localFaq: {
      question: "Is roof cleaning safe on older slate roofs in Maybole?",
      answer: "Yes. Moss is removed by hand and a biocide is applied, with no pressure washing on the roof, which suits older slate and tile roofs.",
    },
  },
  {
    slug: "galston",
    name: "Galston",
    title: "Exterior Cleaning in Galston",
    description: `${brandName()} provides exterior cleaning, driveway washing and roof cleaning in Galston and East Ayrshire. Free quotes.`,
    intro: `${brandName()} covers Galston with driveway, patio, decking and roof cleaning for homes across East Ayrshire.`,
    nearby: ["Kilmarnock", "Stewarton", "Cumnock", "Rankinston"],
    councilArea: "East Ayrshire",
    postcodes: "KA4",
    areasCovered: ["Galston town", "Newmilns", "Darvel", "Hurlford"],
    localContext: "Galston sits in the Irvine Valley on the River Irvine, with Newmilns and Darvel further up the valley. The valley's damp, sheltered setting and older sandstone terraces mean moss and algae build up readily on roofs, walls and paths.",
    serviceFocus: "Roof moss removal, gutter clearing and path and patio cleaning are the main services for Galston and the Irvine Valley.",
    localFaq: {
      question: "Do you cover Newmilns and Darvel as well as Galston?",
      answer: "Yes. Galston, Newmilns and Darvel are all covered, along with Hurlford towards Kilmarnock.",
    },
  },
];

export const locations: LocationPage[] = locationEntries.map((entry) => ({
  ...entry,
  locationFaqs: makeLocationFaqs(entry),
}));

export const getLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);

export const getNearbyLocationLinks = (location: LocationPage) =>
  location.nearby
    .map((name) => locations.find((loc) => loc.name === name))
    .filter((loc): loc is LocationPage => Boolean(loc));

export const getLocationPath = (slug: string) => `/locations/${slug}`;
