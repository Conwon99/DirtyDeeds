import { brandName } from "@/data/business";

export type ProjectPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  details: string;
  highlights: string[];
  serviceType: string;
  location: string;
  image: string;
  imageAlt: string;
};

export const projects: ProjectPage[] = [
  {
    slug: "block-paving-driveway-ayr",
    title: "Block Paving Driveway Restoration in Ayr",
    description: `Block paving driveway deep cleaned and restored in Ayr by ${brandName()}. Weed removal, pressure washing and biocide treatment. Free quotes across Ayrshire.`,
    intro: `This block paving driveway in Ayr had years of moss, weeds and built-up dirt across the surface. ${brandName()} carried out a full restoration to bring the paving back to a cleaner, brighter finish.`,
    details: `${brandName()} removed weeds, deep pressure washed the block paving and rinsed the area thoroughly. A professional biocide treatment was applied to help prevent regrowth and tackle stubborn black spots. The customer was delighted with the transformation — kerb appeal improved dramatically and the driveway looked fresh again. Work was completed by our Ayrshire team with competitive pricing and reliable service. If your driveway, patio or paths look tired, message us for a free quote.`,
    highlights: [
      "Weed removal across block paving joints",
      "Deep pressure washing and thorough rinse",
      "Professional biocide treatment applied",
      "Cleaner, brighter finish with improved kerb appeal",
    ],
    serviceType: "Driveway Cleaning",
    location: "Ayr",
    image: "/gal_01.jpg",
    imageAlt: "Block paving driveway cleaned by Dirty Deeds in Ayr",
  },
  {
    slug: "driveway-paths-doonfoot-ayr",
    title: "Driveway & Path Restoration in Doonfoot, Ayr",
    description: `Driveway and path cleaning in Doonfoot, Ayr by ${brandName()}. Moss, weeds and organic growth removed with biocide treatment. Free Ayrshire quotes.`,
    intro: `A property in Doonfoot, Ayr needed driveway, pathway and patio areas cleaned after years of moss, weeds and organic growth. ${brandName()} restored the paving to a much higher standard.`,
    details: `Martin and the team deep cleaned the driveway and paths with professional pressure washing equipment. Weeds were removed, surfaces were rinsed down and a full biocide treatment was applied to help prevent regrowth. The paving is now cleaner and brighter, dramatically improving the appearance of the property. ${brandName()} covers Doonfoot, Ayr and surrounding Ayrshire areas with summer offers available on driveway and patio packages.`,
    highlights: [
      "Driveway, paths and patio areas cleaned",
      "Moss, weeds and organic growth removed",
      "Deep pressure cleaning completed on site",
      "Biocide treatment to help prevent regrowth",
    ],
    serviceType: "Patio & Path Cleaning",
    location: "Doonfoot, Ayr",
    image: "/gal_02.jpg",
    imageAlt: "Driveway and path cleaning in Doonfoot Ayr by Dirty Deeds",
  },
  {
    slug: "roof-scrape-biocide-ayrshire",
    title: "Roof Scrape & Biocide Treatment in Ayrshire",
    description: `Roof cleaning with manual moss removal and biocide treatment across Ayrshire by ${brandName()}. Gutters cleared. Safe for roof tiles. Free quotes.`,
    intro: `This Ayrshire roof was covered in moss, algae and lichen. ${brandName()} used the professional scrape-and-biocide method — manual moss removal followed by biocide treatment — with no harsh pressure washing.`,
    details: `Our team manually removed moss by hand and cleared gutters of debris. A professional biocide treatment was applied to kill remaining moss, algae and lichen spores and help prevent regrowth. Unlike pressure washing, the biocide allows the roof to continue improving over time as weather naturally removes dead organic growth. Before and after photos were provided to the customer. Roof cleaning packages can include fascia and soffit cleaning and a free biocide maintenance treatment within 24 months.`,
    highlights: [
      "Manual moss removal by hand",
      "Gutters cleared of moss and debris",
      "Professional biocide treatment applied",
      "Safe method — no harsh pressure on tiles",
    ],
    serviceType: "Roof Cleaning & Moss Removal",
    location: "Ayrshire",
    image: "/gal_04.jpg",
    imageAlt: "Roof scrape and biocide treatment by Dirty Deeds in Ayrshire",
  },
  {
    slug: "decking-driveway-composite-clean",
    title: "Driveway, Decking & AstroTurf Clean",
    description: `Driveway power wash, decking clean and AstroTurf cleaning by ${brandName()}. Deep clean and re-sanding available. Free quotes in Ayrshire.`,
    intro: `A customer needed their driveway power washed, decking deep cleaned and AstroTurf refreshed. ${brandName()} completed all three areas with excellent results at competitive prices.`,
    details: `Jake power washed and deep cleaned the driveway, then re-sanded where needed for a neat finish. Decking and AstroTurf were cleaned carefully to restore appearance without damage. The customer praised the quality of work and value for money. ${brandName()} handles composite decking, timber decking and artificial turf alongside driveway and patio cleaning across Ayrshire. Message us for a free quote on multi-surface exterior cleaning.`,
    highlights: [
      "Driveway power washed and deep cleaned",
      "Decking and AstroTurf cleaned on the same visit",
      "Re-sanding completed where required",
      "Competitive pricing with highly recommended results",
    ],
    serviceType: "Decking & Composite Cleaning",
    location: "Ayrshire",
    image: "/gal_03.jpg",
    imageAlt: "Decking and driveway cleaning by Dirty Deeds",
  },
  {
    slug: "soft-wash-property-ayrshire",
    title: "Soft Wash & Exterior Treatment in Ayrshire",
    description: `Soft wash cleaning for paths, windows, doors and fencing by ${brandName()}. Chemical treatment to prevent weed regrowth. Free Ayrshire quotes.`,
    intro: `After an initial power wash, this customer booked a follow-up soft wash covering paths, windows, doors and fencing across the property. Every area was chemically treated to stop weeds returning.`,
    details: `${brandName()} followed up the first clean with a comprehensive soft wash treatment. Windows, doors, fencing and all exterior areas were safely treated to prevent organic regrowth. The customer rated the work five stars and said everything looked absolutely perfect. Soft wash house washing is ideal where pressure alone is not enough and a longer-lasting biocide finish is needed. Contact ${brandName()} for soft wash and exterior cleaning quotes across Ayrshire.`,
    highlights: [
      "Soft wash follow-up after initial power wash",
      "Windows, doors and fencing treated",
      "Safe chemical treatment to prevent regrowth",
      "Five-star customer rating for finished results",
    ],
    serviceType: "Soft Wash & House Washing",
    location: "Ayrshire",
    image: "/gal_05.jpg",
    imageAlt: "Soft wash exterior cleaning by Dirty Deeds in Ayrshire",
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
