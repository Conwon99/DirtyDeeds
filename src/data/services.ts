import { brandName, business, citiesLabel } from "@/data/business";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  parentCategorySlug: string | null;
  description: string;
  cardDescription: string;
  iconUrl: string;
  iconAlt: string;
  image: string;
  imageAlt: string;
  about: string;
  why: string;
  signsYouNeed: string;
  options: string;
  localContext: string;
  whatToExpect: string;
  whyChooseUs: string;
  benefits: string[];
  process: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const serviceIconBase = "https://c.animaapp.com/mhqqhnhjBr0jWt/assets";

const cities = citiesLabel();
const brand = brandName();
const fullName = business.businessName;
const region = business.region;
const phone = business.phoneLocal;
const primary = business.primaryCity;
const secondary = business.secondaryCity;

export const services: ServicePage[] = [
  {
    slug: "driveway-cleaning",
    title: `Driveway Cleaning in ${cities}`,
    shortTitle: "Driveway Cleaning",
    navTitle: "Driveways",
    parentCategorySlug: "exterior-cleaning-ayr-kilmarnock",
    description: `Professional driveway cleaning and pressure washing in ${cities} and across ${region}. Block paving, tarmac and concrete restored. Biocide treatment available. Fully insured. Free quotes.`,
    cardDescription: `Deep driveway cleaning, pressure washing and block paving restoration across ${cities} and ${region}. Weed removal, re-sanding and biocide treatments to bring back colour and grip.`,
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Driveway cleaning service icon",
    image: "/gal_01.jpg",
    imageAlt: `Driveway pressure washing completed by ${fullName} in ${region}`,
    about: `${fullName} specialises in driveway cleaning for homes across ${cities} and ${region}. Years of moss, algae, weeds and tyre marks can make block paving, tarmac and concrete look tired and feel slippery underfoot. Jake and Martin use professional pressure washing equipment to deep clean driveways, lift ingrained dirt and restore the original colour of the surface. Work can include weed removal from joints, re-sanding block paving where needed, and biocide treatment to help slow regrowth. Whether you have a small front drive in ${primary} or a larger property near ${secondary}, the team focuses on a thorough clean and a finish customers are proud to show off.`,
    why: `A properly cleaned driveway improves kerb appeal, reduces slip risk in wet weather and helps protect paving from long-term damage caused by moss holding moisture against the surface.`,
    signsYouNeed: `Green moss between block paving joints, black algae patches, weeds growing through the surface and slippery areas after rain are all signs your driveway needs professional cleaning. If sand has washed out of block paving, joints can loosen and weeds take hold more quickly. Dark staining from oil, leaves and general grime often builds up gradually until the drive looks noticeably dull compared with neighbouring properties. Leaving moss and algae too long can make the surface harder to clean and increase the risk of slips for family and visitors.`,
    options: `${brand} offers pressure washing for tarmac, concrete and block paving driveways, with optional weed removal, joint re-sanding and biocide treatment to help prevent regrowth. Lighter cleans suit recently stained surfaces, while full deep cleans tackle years of built-up grime. Biocide can be applied after washing to treat algae and moss at root level. If your patio or paths need attention at the same time, driveway cleaning can be booked alongside patio and path cleaning for a coordinated exterior refresh. Call ${phone} or message for a free, no-obligation quote.`,
    localContext: `Driveways across ${primary}, ${secondary}, Doonfoot, Prestwick, Troon and surrounding ${region} towns face damp weather, shaded corners and heavy use from vehicles. Block paving is especially common and benefits from periodic deep cleaning and re-sanding. If you are searching for driveway cleaning near me in ${cities}, ${brand} works locally with competitive prices, reliable scheduling and fully insured service.`,
    whatToExpect: `When you contact ${brand}, Jake or Martin will discuss the driveway surface, access and level of staining. A visit can be arranged if helpful to assess block paving condition and joint sand. On the day, the area is prepared, pressure washed with care for the surface type, and weeds removed from joints where agreed. Re-sanding and biocide treatment follow where quoted. The driveway is left noticeably cleaner with improved colour and grip.`,
    whyChooseUs: `Customers across ${region} recommend ${brand} for thorough driveway cleaning, fair pricing and friendly communication. Jake and Martin take pride in restoring driveways to a fresh, bright finish — not a quick splash and go. Fully insured, free quotes and reliable local service make booking straightforward.`,
    benefits: [
      "Deep pressure washing for block paving, tarmac and concrete driveways.",
      "Weed removal, joint re-sanding and biocide treatment available.",
      "Improved kerb appeal, colour restoration and safer grip in wet weather.",
      `Free quotes across ${cities}, ${region} and nearby towns.`,
    ],
    process: [
      "Discuss the driveway surface, staining and access requirements.",
      "Prepare the area and pressure wash using the right approach for the material.",
      "Remove weeds from joints and re-sand block paving where agreed.",
      "Apply biocide treatment if quoted and leave the driveway clean and refreshed.",
    ],
    faq: [
      {
        question: `Do you clean block paving driveways near ${primary} and ${secondary}?`,
        answer: `Yes. ${brand} deep cleans block paving, tarmac and concrete driveways across ${cities} and ${region}. Weed removal, re-sanding and biocide treatment can be included in your quote.`,
      },
      {
        question: "Can you remove weeds from driveway joints?",
        answer: `Yes. Weeds are removed during the clean and biocide treatment can be applied afterwards to help slow regrowth between block paving joints.`,
      },
      {
        question: "Is re-sanding included after pressure washing?",
        answer: `Re-sanding can be included where block paving joints need fresh kiln-dried sand after washing. This is discussed and quoted before work begins.`,
      },
      {
        question: `How do I get a driveway cleaning quote near me in ${region}?`,
        answer: `Message ${fullName} or call ${phone} with your location and a brief description. Photos of the driveway help us respond quickly with a free quote.`,
      },
    ],
  },
  {
    slug: "patio-path-cleaning",
    title: `Patio & Path Cleaning in ${cities}`,
    shortTitle: "Patio & Path Cleaning",
    navTitle: "Patios & Paths",
    parentCategorySlug: "exterior-cleaning-ayr-kilmarnock",
    description: `Patio and path cleaning in ${cities} and ${region}. Pressure washing for slabs, flags and garden paths. Weed removal and biocide treatment. Fully insured. Free quotes.`,
    cardDescription: `Garden slabs, patios and paths deep cleaned across ${cities}. Algae, moss and weeds removed with professional pressure washing and biocide treatments.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Patio and path cleaning service icon",
    image: "/gal_02.jpg",
    imageAlt: `Patio pressure washing completed by ${fullName} in ${region}`,
    about: `Patios and garden paths take a beating from Scottish weather. Moss, algae and weeds between slabs can make outdoor areas look neglected and become dangerously slippery when wet. ${fullName} provides patio and path cleaning across ${cities} and ${region}, using professional pressure washing to lift years of grime from concrete slabs, natural stone, flags and block paving. Jake and Martin have cleaned garden paths for customers who simply wanted a safer, brighter space to enjoy — with results that speak for themselves in local reviews. Biocide treatment can be applied after washing to help tackle algae and moss at source, keeping patios looking better for longer.`,
    why: `Clean patios and paths are safer to walk on, easier to maintain and make gardens feel more inviting — especially before summer gatherings or when preparing a property for sale.`,
    signsYouNeed: `Slippery green algae on patio slabs, moss growing in shaded corners, weeds pushing through joints and a generally dull, grey appearance are clear signs cleaning is overdue. If you avoid using certain areas of the garden after rain, algae build-up is likely the cause. Black spot staining on natural stone and ingrained dirt along frequently used paths worsen over time. Paths leading to front doors and side gates are especially important to keep safe for post, deliveries and elderly relatives visiting your home.`,
    options: `${brand} pressure washes patios, garden paths, side passages and utility areas. Light cleans refresh recently stained surfaces, while full deep cleans tackle heavy moss and algae. Weed removal from joints and biocide treatment help slow regrowth. Patio cleaning pairs well with driveway cleaning or decking cleaning if you want the whole garden refreshed in one visit. Soft wash options may suit delicate surfaces or areas close to planted borders. Contact Jake or Martin on ${phone} for advice and a free quote.`,
    localContext: `Gardens in ${primary}, ${secondary}, Alloway, Mossblown and across ${region} often have shaded patios that green up quickly through autumn and winter. Coastal humidity and frequent rain accelerate algae growth on paths and slabs. If you need patio cleaning near me in ${cities}, ${brand} provides local, fully insured service with the same attention to detail shown on driveways and roofs.`,
    whatToExpect: `${brand} reviews the patio or path material, drainage and how heavily soiled the area is. Furniture can be moved where possible before washing begins. Slabs and paths are pressure washed systematically, with weeds cleared from joints where agreed. Biocide is applied if quoted. The area is left cleaner, brighter and noticeably safer underfoot.`,
    whyChooseUs: `Local customers praise ${brand} for transforming tired garden slabs and paths. Martin and Jake arrive on time, work neatly and leave outdoor areas looking refreshed. Competitive pricing, biocide options and free quotes make it easy to book patio cleaning alongside other exterior work.`,
    benefits: [
      "Pressure washing for patios, garden paths, slabs and flagstones.",
      "Weed removal from joints and biocide treatment to slow regrowth.",
      "Safer, less slippery surfaces and improved garden appearance.",
      `Reliable local service across ${cities} and ${region}.`,
    ],
    process: [
      "Review the patio or path material, access and level of staining.",
      "Prepare the area and pressure wash slabs and paths systematically.",
      "Clear weeds from joints and treat algae or moss where agreed.",
      "Apply biocide if quoted and leave the area clean and ready to use.",
    ],
    faq: [
      {
        question: `Do you offer patio cleaning near me in ${primary} or ${secondary}?`,
        answer: `Yes. ${brand} cleans patios and garden paths across ${cities} and surrounding ${region} towns. Message us with your location for a free quote.`,
      },
      {
        question: "Will pressure washing damage my patio slabs?",
        answer: `We adjust pressure and technique to suit the surface — concrete slabs, flags and block paving are cleaned with care to lift grime without unnecessary force.`,
      },
      {
        question: "Can you clean paths and side passages at the same time?",
        answer: `Yes. Patios, paths, side passages and utility areas can be cleaned in one visit. Combining work often saves time and cost compared with booking separately.`,
      },
    ],
  },
  {
    slug: "decking-composite-cleaning",
    title: `Decking & Composite Cleaning in ${cities}`,
    shortTitle: "Decking Cleaning",
    navTitle: "Decking",
    parentCategorySlug: "exterior-cleaning-ayr-kilmarnock",
    description: `Decking and composite decking cleaning in ${cities} and ${region}. Algae and grime removed safely. Soft wash options available. Fully insured. Free quotes.`,
    cardDescription: `Timber and composite decking cleaned across ${cities}. Algae, moss and slippery build-up removed to restore a safer, smarter outdoor living space.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Decking cleaning service icon",
    image: "/gal_03.jpg",
    imageAlt: `Decking cleaning completed by ${fullName} in ${region}`,
    about: `Decking should be a place to relax, not a slippery hazard. Timber and composite decking across ${cities} and ${region} commonly develops green algae, moss and grime that makes boards slick after rain. ${fullName} cleans decking carefully, using appropriate pressure and soft wash techniques to lift dirt without damaging boards or finishes. Jake has deep cleaned and treated decking alongside driveways and AstroTurf for local customers, with results that earned strong recommendations. Whether you have a small garden deck or a larger entertaining area, the team focuses on restoring grip, appearance and usability.`,
    why: `Regular decking cleaning removes slip hazards, improves how the garden looks and helps extend the life of timber and composite boards by reducing moisture-holding algae on the surface.`,
    signsYouNeed: `A green tinge across decking boards, slippery sections after light rain, black mould spots and a generally tired appearance mean cleaning is needed. Decking in shaded areas under trees or beside fences greens up fastest. If you have avoided using the deck since last summer, built-up algae is the usual culprit. Composite decking still needs periodic cleaning — it will not rot like timber, but algae makes it dangerously slick. Waiting too long can mean heavier staining that takes more effort to shift.`,
    options: `${brand} cleans timber decking, composite boards and raised platforms. Light maintenance washes suit annual upkeep, while full deep cleans tackle heavy algae and ingrained dirt. Soft wash treatment can be used where a gentler approach suits the material or nearby planting. Decking cleaning can be combined with patio, path or house washing for a full garden refresh. Jake and Martin advise on the best method for your deck type before quoting.`,
    localContext: `Decking is popular in gardens across ${primary}, ${secondary} and ${region}, but damp weather and tree cover mean algae returns without periodic cleaning. Customers in Doonfoot, Prestwick and surrounding villages often book decking work alongside patio and driveway cleaning. Search for decking cleaning near me in ${cities} and ${brand} provides local, fully insured service.`,
    whatToExpect: `After discussing your decking material and condition, ${brand} prepares the area and cleans boards systematically. Algae and grime are lifted using the appropriate pressure or soft wash method. The deck is rinsed and left cleaner, brighter and safer to walk on. Biocide or maintenance advice can be provided where helpful.`,
    whyChooseUs: `${brand} understands that decking needs a careful approach — not the same brute force used on concrete driveways. Customers value Jake and Martin's practical advice, tidy finishing and fair quotes. Fully insured work and free quotes across ${region} make booking simple.`,
    benefits: [
      "Safe cleaning for timber and composite decking.",
      "Algae, moss and slippery build-up removed effectively.",
      "Improved grip, appearance and usability of outdoor living spaces.",
      `Free quotes across ${cities} and ${region}.`,
    ],
    process: [
      "Assess the decking material, condition and surrounding garden areas.",
      "Prepare the deck and clean boards using the appropriate method.",
      "Remove algae, moss and ingrained grime from the surface.",
      "Rinse, inspect the finish and advise on maintenance where helpful.",
    ],
    faq: [
      {
        question: "Can you clean composite decking as well as timber?",
        answer: `Yes. ${brand} cleans both timber and composite decking, adjusting technique to suit the board type and condition.`,
      },
      {
        question: `Do you offer decking cleaning near me in ${region}?`,
        answer: `Yes. We serve ${cities} and towns across ${region}. Send your location and photos for a free quote.`,
      },
      {
        question: "Will cleaning make my decking less slippery?",
        answer: `Removing algae and moss significantly improves grip. Regular cleaning helps keep decking safer through wet ${region} weather.`,
      },
      {
        question: "Can decking cleaning be combined with other services?",
        answer: `Yes. Decking, patios, driveways and house washing can often be completed in one visit. Ask Jake or Martin when requesting your quote.`,
      },
    ],
  },
  {
    slug: "soft-wash-house-washing",
    title: `Soft Wash & House Washing in ${cities}`,
    shortTitle: "House Washing",
    navTitle: "House Washing",
    parentCategorySlug: "exterior-cleaning-ayr-kilmarnock",
    description: `Soft wash and house washing in ${cities} and ${region}. Exterior walls, render, UPVC, windows and fencing cleaned safely. Biocide treatment. Free quotes.`,
    cardDescription: `Low-pressure soft wash house washing across ${cities}. Walls, render, UPVC, windows, doors and fencing treated to remove algae and refresh kerb appeal.`,
    iconUrl: `${serviceIconBase}/670f922ca00205c2937593ea_service-04.svg`,
    iconAlt: "Soft wash house washing service icon",
    image: "/gal_04.jpg",
    imageAlt: `Soft wash house washing by ${fullName} in ${region}`,
    about: `Exterior walls, render, UPVC cladding, windows, doors and fencing all collect algae, pollution and weather staining over time. ${fullName} provides soft wash house washing across ${cities} and ${region} — a low-pressure approach that cleans thoroughly without the risks of aggressive pressure washing on delicate surfaces. Jake has followed up driveway cleans with full soft wash treatments covering windows, doors and fencing, with chemical treatment to help prevent weeds and algae returning. The result is a property that looks noticeably fresher from the street and feels well cared for.`,
    why: `Soft washing removes green and black staining from exterior surfaces safely, improving kerb appeal and helping protect render, paint and UPVC from long-term damage caused by biological growth.`,
    signsYouNeed: `Green algae on render or pebbledash, black streaks on walls, dirty UPVC cladding, stained fencing and dull window frames all suggest house washing would make a visible difference. North-facing walls and areas under trees green up fastest in ${region}'s damp climate. If neighbours have recently cleaned their exteriors and your property looks noticeably darker by comparison, a soft wash can restore balance. Properties being prepared for sale or rental often benefit from a full exterior refresh.`,
    options: `${brand} soft washes exterior walls, render, pebbledash, UPVC, soffits, fascia, windows, doors and fencing. Treatments are selected to suit the surface and level of staining. Biocide can be applied to help slow regrowth on walls and fences. House washing pairs naturally with driveway, patio or roof cleaning for a complete property refresh. Jake and Martin assess each job individually rather than using a one-size-fits-all approach.`,
    localContext: `Homes across ${primary}, ${secondary}, Rankinston and ${region} face persistent damp conditions that encourage algae on render and UPVC. Coastal properties near Prestwick and Troon also deal with salt and wind exposure. If you are looking for house washing near me in ${cities}, ${brand} offers fully insured soft wash cleaning with free quotes.`,
    whatToExpect: `${brand} discusses which exterior surfaces need attention and any access considerations. The soft wash solution is applied to walls, render, UPVC or fencing as quoted, allowed to work on biological growth, then rinsed at low pressure. Windows, doors and delicate areas are treated with care. Biocide follows where agreed. The property is left visibly cleaner with improved kerb appeal.`,
    whyChooseUs: `Customers praise ${brand} for soft wash results that cover every area — not just the obvious front wall. Jake's follow-up approach to treating windows, doors and fencing has earned five-star feedback. Fully insured, competitively priced and easy to contact on ${phone}.`,
    benefits: [
      "Low-pressure soft wash safe for render, UPVC and painted surfaces.",
      "Walls, windows, doors, fencing and cladding cleaned thoroughly.",
      "Biocide treatment available to help slow algae and weed regrowth.",
      `Free quotes across ${cities} and ${region}.`,
    ],
    process: [
      "Discuss which exterior surfaces need cleaning and assess access.",
      "Apply soft wash solution suited to the material and staining.",
      "Rinse at low pressure, treating windows, doors and fencing with care.",
      "Apply biocide where quoted and leave the property looking refreshed.",
    ],
    faq: [
      {
        question: "What is the difference between soft wash and pressure washing?",
        answer: `Soft wash uses low pressure and cleaning solutions to lift algae and dirt safely from render, UPVC and painted surfaces. Pressure washing suits harder surfaces like driveways and patios.`,
      },
      {
        question: `Do you offer house washing near me in ${primary} or ${secondary}?`,
        answer: `Yes. ${brand} provides soft wash house washing across ${cities} and ${region}. Message us with photos of your property for a free quote.`,
      },
      {
        question: "Can you clean fencing and windows during house washing?",
        answer: `Yes. Soft wash house washing can include fencing, windows, doors and UPVC cladding as part of a full exterior refresh.`,
      },
    ],
  },
  {
    slug: "roof-cleaning-moss-removal",
    title: `Roof Cleaning & Moss Removal in ${cities}`,
    shortTitle: "Roof Cleaning",
    navTitle: "Roof Cleaning",
    parentCategorySlug: "roof-cleaning-ayr-kilmarnock",
    description: `Roof cleaning and moss removal in ${cities} and ${region}. Safe scrape method — no harsh pressure on tiles. Biocide treatment. Fully insured. Free quotes.`,
    cardDescription: `Safe roof cleaning and moss removal across ${cities}. Manual scrape method and biocide treatment — no harsh pressure washing on roof tiles.`,
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Roof cleaning and moss removal service icon",
    image: "/gal_05.jpg",
    imageAlt: `Roof cleaning and moss removal by ${fullName} in ${region}`,
    about: `Moss on roof tiles is more than a cosmetic problem. It holds moisture against the surface, can contribute to premature wear and breaks away into gutters over time. ${fullName} provides roof cleaning and moss removal across ${cities} and ${region} using a careful scrape method — manually removing moss without harsh pressure washing on tiles. Jake and Martin treat the roof with professional biocide afterwards to help prevent rapid regrowth. Customers have praised the team for leaving roofs clean, treated and gutters cleared as part of the same job. The approach prioritises the long-term condition of your roof over a quick blast that could damage tiles.`,
    why: `Removing moss and treating the roof improves appearance, helps rainwater drain properly and can reduce the risk of blocked gutters and premature tile wear in ${region}'s damp climate.`,
    signsYouNeed: `Visible green moss on roof tiles, dark streaks from algae, moss debris in gutters and a roof that looks noticeably greener than neighbouring properties all indicate cleaning is needed. If gutters overflow after rain or you see moss falling onto driveways and paths below, the roof is shedding growth that should be removed at source. North-facing and shaded roof slopes green up first. Delaying treatment allows moss to thicken, making removal harder and increasing moisture retention against tiles.`,
    options: `${brand} manually scrapes moss from roof tiles, clears loose debris and applies biocide treatment to help slow regrowth. Gutter clearing and fascia cleaning can be added to the same visit. The team does not use harsh pressure washing on roof tiles — the scrape-and-biocide method is safer for tile condition. Roof cleaning can be combined with driveway or house washing for a full exterior refresh. Free quotes explain exactly what is recommended for your roof type.`,
    localContext: `${region}'s wet weather makes moss build-up common on roofs in ${primary}, ${secondary}, Rankinston and surrounding towns. Properties near trees and sheltered valleys see faster growth. If you need roof cleaning near me in ${cities}, ${brand} offers fully insured, scrape-method cleaning with biocide treatment.`,
    whatToExpect: `${brand} assesses the roof, access and extent of moss growth before quoting. On the day, moss is manually scraped from tiles, debris cleared and biocide applied to treated areas. Gutters can be cleared as part of the job where agreed. The roof is left clean, treated and visibly improved from street level.`,
    whyChooseUs: `Local reviews highlight ${brand}'s roof work — clean, treated and gutters dealt with in one visit. Jake and Martin use the scrape method customers trust, not aggressive pressure that risks tile damage. Fully insured, free quotes and honest advice on what your roof actually needs.`,
    benefits: [
      "Safe manual moss removal — no harsh pressure washing on tiles.",
      "Professional biocide treatment to help prevent rapid regrowth.",
      "Gutter clearing and fascia cleaning available on the same visit.",
      `Fully insured roof cleaning across ${cities} and ${region}.`,
    ],
    process: [
      "Assess the roof, moss coverage, access and gutter condition.",
      "Manually scrape moss from tiles using the safe scrape method.",
      "Clear debris and apply biocide treatment to the cleaned roof.",
      "Clear gutters where agreed and leave the property tidy.",
    ],
    faq: [
      {
        question: "Do you pressure wash roof tiles?",
        answer: `No. ${brand} uses a manual scrape method and biocide treatment rather than harsh pressure washing, which can damage tiles and force water where it should not go.`,
      },
      {
        question: `Do you offer roof cleaning near me in ${region}?`,
        answer: `Yes. We provide roof cleaning and moss removal across ${cities} and surrounding ${region} towns. Contact us on ${phone} for a free quote.`,
      },
      {
        question: "Can gutter clearing be included with roof cleaning?",
        answer: `Yes. Gutter clearing is commonly booked alongside roof cleaning and moss removal, especially where moss debris has built up in gutters.`,
      },
      {
        question: "How long does biocide treatment help prevent moss regrowth?",
        answer: `Biocide treatment slows regrowth significantly, though ${region}'s damp climate means periodic inspection is sensible. We advise on realistic expectations during your quote.`,
      },
    ],
  },
  {
    slug: "gutter-clearing-fascia-soffit",
    title: `Gutter Clearing & Fascia Cleaning in ${cities}`,
    shortTitle: "Gutter Clearing",
    navTitle: "Gutters & Fascia",
    parentCategorySlug: "roof-cleaning-ayr-kilmarnock",
    description: `Gutter clearing, fascia and soffit cleaning in ${cities} and ${region}. Blocked gutters cleared, UPVC refreshed. Fully insured. Free quotes.`,
    cardDescription: `Gutter clearing and fascia/soffit cleaning across ${cities}. Blockages removed, overflow issues addressed and exterior trim refreshed.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Gutter clearing and fascia cleaning service icon",
    image: "/gal_06.jpg",
    imageAlt: `Gutter clearing and fascia cleaning by ${fullName} in ${region}`,
    about: `Blocked gutters can cause overflow, staining on walls and water damage over time. ${fullName} provides gutter clearing, fascia cleaning and soffit cleaning across ${cities} and ${region}. Moss and debris from roofs commonly ends up in gutters — customers have had gutters replaced and cleared as part of broader roof and driveway work by Jake and Martin. Fascia and soffit boards also collect dirt and algae, making the roofline look tired. ${brand} clears blockages, flushes gutters where needed and cleans UPVC fascia and soffits to refresh the property's appearance.`,
    why: `Clear gutters move rainwater away from walls and foundations properly. Clean fascia and soffits complete the roofline and improve kerb appeal alongside roof and exterior cleaning work.`,
    signsYouNeed: `Water overflowing during rain, plants growing in gutters, sagging gutter sections, staining on exterior walls below the roofline and dirty fascia boards all signal maintenance is overdue. Moss debris from roof cleaning often accelerates blockages. If you have not cleared gutters in several years, a build-up of leaves, moss and silt is likely. Visible green or black staining on white UPVC fascia makes the whole property look neglected from the street.`,
    options: `${brand} clears gutter blockages, flushes downpipes where accessible and cleans fascia and soffit boards. Gutter clearing is commonly booked with roof cleaning and moss removal. Fascia and soffit cleaning can also pair with soft wash house washing. Where gutters are damaged, the team can advise on replacement — customers have had gutters replaced during broader exterior maintenance visits. Contact ${phone} for a free quote.`,
    localContext: `Properties across ${primary}, ${secondary} and ${region} face heavy leaf fall, moss debris and frequent rain that tests guttering systems. Older housing stock and tree-lined streets see faster blockages. Search for gutter cleaning near me in ${cities} and ${brand} provides local, fully insured service.`,
    whatToExpect: `${brand} inspects gutters, downpipes and the roofline before work begins. Blockages are cleared and gutters flushed where agreed. Fascia and soffit boards are cleaned to lift dirt and algae staining. The roofline is left functional and visibly tidier. Any concerns about damaged guttering are flagged honestly.`,
    whyChooseUs: `Customers trust ${brand} for gutter work completed alongside roof cleaning — not as an afterthought. Jake and Martin communicate clearly, work neatly and leave gutters flowing properly. Fully insured, free quotes and reliable scheduling across ${region}.`,
    benefits: [
      "Gutter clearing and downpipe flushing to restore proper drainage.",
      "Fascia and soffit cleaning to refresh the roofline.",
      "Commonly combined with roof cleaning and moss removal.",
      `Fully insured service across ${cities} and ${region}.`,
    ],
    process: [
      "Inspect gutters, downpipes and fascia boards for blockages and damage.",
      "Clear debris and flush gutters to restore water flow.",
      "Clean fascia and soffit boards to remove dirt and algae staining.",
      "Check the roofline finish and advise on any gutter repairs if needed.",
    ],
    faq: [
      {
        question: `Do you offer gutter cleaning near me in ${primary} or ${secondary}?`,
        answer: `Yes. ${brand} clears gutters across ${cities} and ${region}. Book standalone gutter clearing or combine it with roof cleaning.`,
      },
      {
        question: "Can you clean fascia and soffits as well as gutters?",
        answer: `Yes. Fascia and soffit cleaning is available alongside gutter clearing to refresh the full roofline.`,
      },
      {
        question: "Do you replace damaged gutters?",
        answer: `We can advise on gutter condition during a visit. Replacement has been completed for customers as part of broader exterior maintenance work — ask when quoting.`,
      },
    ],
  },
  {
    slug: "biocide-treatments",
    title: `Biocide Treatments in ${cities}`,
    shortTitle: "Biocide Treatments",
    navTitle: "Biocide",
    parentCategorySlug: "roof-cleaning-ayr-kilmarnock",
    description: `Professional biocide treatments in ${cities} and ${region}. Roofs, driveways, patios and walls treated to slow moss and algae regrowth. Free quotes.`,
    cardDescription: `Biocide treatments for roofs, driveways, patios and exterior walls across ${cities}. Slow moss, algae and weed regrowth after cleaning.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Biocide treatment service icon",
    image: "/hero.jpg",
    imageAlt: `Exterior biocide treatment by ${fullName} in ${region}`,
    about: `Cleaning alone removes visible moss and algae, but regrowth in ${region}'s damp climate can return surprisingly quickly without treatment. ${fullName} applies professional biocide treatments to roofs, driveways, patios, paths, walls and fencing across ${cities} and ${region}. Biocide works at root level to help slow regrowth after pressure washing or roof scraping. Jake has used chemical treatment after soft wash house washing to stop weeds coming back on paths, fencing and exterior surfaces — with results customers describe as looking absolutely perfect. Biocide is a key part of ${brand}'s long-lasting exterior maintenance approach.`,
    why: `Biocide treatment extends the results of cleaning by tackling biological growth at source, reducing how quickly moss, algae and weeds return to driveways, roofs and exterior walls.`,
    signsYouNeed: `If moss and algae return within months of cleaning, or weeds keep sprouting between block paving joints, biocide treatment is likely worthwhile. Properties in shaded, damp locations across ${region} see the fastest regrowth. Roofs cleaned without biocide often green up again within a year or two. Driveways and patios with recurring algae benefit from post-wash treatment. If you want longer-lasting results from exterior cleaning, biocide should be part of the conversation.`,
    options: `${brand} applies biocide after roof cleaning, driveway washing, patio cleaning and soft wash house washing. Treatments are matched to the surface — roofs, block paving, render, fencing and paths each have appropriate approaches. Biocide can be booked as a follow-up to previous cleaning or as part of a combined quote. Jake and Martin explain what treatment involves and how it supports longer-lasting results.`,
    localContext: `Damp ${region} weather means biological regrowth is a constant challenge for properties in ${primary}, ${secondary} and surrounding towns. Coastal humidity, tree cover and shaded gardens all accelerate moss and algae. Biocide treatment is standard practice for ${brand} customers who want cleaning results that last.`,
    whatToExpect: `After cleaning or scraping, ${brand} applies biocide to the treated surfaces. The solution is left to work on moss, algae and spores at root level. No harsh rinsing is needed immediately — the treatment continues working over time. Jake or Martin explain aftercare and realistic expectations for regrowth timelines in your area.`,
    whyChooseUs: `${brand} uses biocide as part of a complete clean — not an optional extra customers only hear about afterwards. Reviews mention safe chemical treatment that kept paths, fencing and exterior areas looking perfect. Professional products, applied correctly, by a fully insured local team.`,
    benefits: [
      "Professional biocide applied after roof, driveway and patio cleaning.",
      "Helps slow moss, algae and weed regrowth at root level.",
      "Longer-lasting results from exterior cleaning investment.",
      `Available across ${cities} and ${region} as part of cleaning quotes.`,
    ],
    process: [
      "Complete the relevant cleaning — roof scrape, pressure wash or soft wash.",
      "Apply biocide treatment suited to the surface type.",
      "Allow the treatment to work on biological growth at root level.",
      "Advise on aftercare and realistic regrowth expectations for your property.",
    ],
    faq: [
      {
        question: "Is biocide treatment safe for my garden and pets?",
        answer: `${brand} applies professional biocide products correctly and advises on any brief precautions needed around treated areas. Ask Jake or Martin about your specific setup when quoting.`,
      },
      {
        question: `Do you offer biocide treatment near me in ${region}?`,
        answer: `Yes. Biocide is applied across ${cities} and ${region} after roof cleaning, driveway washing, patio cleaning and house washing.`,
      },
      {
        question: "Can biocide be applied without a full clean first?",
        answer: `Biocide works best after moss, algae and surface dirt are removed. We typically include treatment as part of a cleaning quote rather than applying it to heavily soiled surfaces alone.`,
      },
      {
        question: "How soon will I see results after biocide treatment?",
        answer: `Treated moss and algae often continue to break down over several weeks after application. The goal is longer-term regrowth prevention, not an instant colour change.`,
      },
    ],
  },
  {
    slug: "grass-cutting",
    title: `Grass Cutting in ${cities}`,
    shortTitle: "Grass Cutting",
    navTitle: "Grass Cutting",
    parentCategorySlug: "lawn-garden-care-ayr-kilmarnock",
    description: `Grass cutting and lawn mowing in ${cities} and ${region}. Regular and one-off cuts for tidy gardens. Fully insured. Reliable local service. Free quotes.`,
    cardDescription: `Grass cutting and lawn mowing across ${cities} and ${region}. Regular maintenance or one-off cuts to keep gardens neat through the season.`,
    iconUrl: `${serviceIconBase}/670f922ca00205c2937593ea_service-04.svg`,
    iconAlt: "Grass cutting service icon",
    image: "/about.jpg",
    imageAlt: `Grass cutting and lawn care by ${fullName} in ${region}`,
    about: `${fullName} provides grass cutting and lawn mowing across ${cities} and ${region} alongside exterior cleaning services. Overgrown lawns make gardens feel neglected and can attract pests or hide hazards. Jake and Martin offer regular grass cutting for customers who want a reliable local team, as well as one-off cuts before events, property viewings or the start of the growing season. The same fully insured, customer-focused approach that applies to driveway and roof work extends to lawn care — tidy results, fair pricing and easy communication.`,
    why: `Regular grass cutting keeps gardens presentable, manageable and safer to use — especially for families, landlords and older customers who find mowing difficult.`,
    signsYouNeed: `Grass taller than usual, uneven growth, overgrown edges along paths and fences, and a garden that looks untidy from the street all mean a cut is overdue. If you are preparing a property for sale, hosting guests or returning from holiday to an overgrown lawn, a one-off cut restores order quickly. Landlords with rental properties in ${region} often need reliable mowing between tenancies. Customers who struggle with mobility or busy schedules benefit from regular visits through spring and summer.`,
    options: `${brand} offers one-off grass cutting and regular lawn mowing schedules across the growing season. Edging along paths, patios and fences can be included where agreed. Grass cutting pairs naturally with broader garden maintenance and lawn care services. Exterior cleaning customers often add grass cutting to keep the whole property looking sharp. Message ${phone} to discuss frequency and garden size.`,
    localContext: `Gardens across ${primary}, ${secondary}, Rankinston and ${region} grow quickly through spring and early summer. Rental properties, family homes and older customers all need reliable mowing. If you need grass cutting near me in ${cities}, ${brand} offers the same local, fully insured service trusted for exterior cleaning.`,
    whatToExpect: `${brand} discusses your lawn size, access and whether you need a one-off or regular schedule. On the day, grass is cut to an agreed height with edges tidied where quoted. Clippings are handled as agreed. The garden is left neater and more manageable.`,
    whyChooseUs: `Customers appreciate booking one local team for exterior cleaning and grass cutting. Jake and Martin are reliable, easy to contact and competitively priced. Fully insured, free quotes and practical scheduling across ${region}.`,
    benefits: [
      "One-off and regular grass cutting through the growing season.",
      "Edging along paths, patios and fences available.",
      "Same reliable local team as exterior cleaning services.",
      `Free quotes across ${cities} and ${region}.`,
    ],
    process: [
      "Discuss lawn size, access and one-off or regular cutting needs.",
      "Agree schedule, pricing and any edging requirements.",
      "Cut grass to an agreed height and tidy edges where quoted.",
      "Leave the garden neat and confirm next visit if on a regular schedule.",
    ],
    faq: [
      {
        question: `Do you offer grass cutting near me in ${primary} or ${secondary}?`,
        answer: `Yes. ${brand} cuts lawns across ${cities} and ${region}. Message us with your garden size and location for a free quote.`,
      },
      {
        question: "Can I book regular lawn mowing?",
        answer: `Yes. Regular grass cutting schedules are available through spring and summer. Frequency depends on growth rate and your preferences.`,
      },
      {
        question: "Do you offer grass cutting alongside exterior cleaning?",
        answer: `Yes. Many customers combine grass cutting with driveway, patio or roof work. Ask when requesting your quote.`,
      },
    ],
  },
  {
    slug: "lawn-care-garden-maintenance",
    title: `Lawn Care & Garden Maintenance in ${cities}`,
    shortTitle: "Lawn & Garden Care",
    navTitle: "Garden Care",
    parentCategorySlug: "lawn-garden-care-ayr-kilmarnock",
    description: `Lawn care and garden maintenance in ${cities} and ${region}. Ongoing garden upkeep alongside exterior cleaning. Fully insured. Free quotes.`,
    cardDescription: `Lawn care and garden maintenance across ${cities}. Ongoing upkeep to keep gardens tidy alongside professional exterior cleaning.`,
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Lawn care and garden maintenance service icon",
    image: "/gal_01.jpg",
    imageAlt: `Lawn care and garden maintenance by ${fullName} in ${region}`,
    about: `Beyond a single grass cut, gardens need ongoing attention to stay presentable through the season. ${fullName} provides lawn care and garden maintenance across ${cities} and ${region} — helping customers who want a tidy outdoor space without juggling multiple contractors. Jake and Martin bring the same reliable approach from exterior cleaning to garden upkeep: practical advice, fair quotes and neat finishing. Services can include regular mowing, edging, seasonal tidy-ups and general garden maintenance alongside the pressure washing, roof cleaning and soft wash work ${brand} is known for.`,
    why: `Consistent garden maintenance keeps properties looking cared for, reduces the effort needed before each season and lets customers book one trusted local team for both exterior cleaning and lawn care.`,
    signsYouNeed: `Overgrown borders, uneven lawns, gardens that look fine from a distance but messy up close, and outdoor spaces you avoid because upkeep has slipped all suggest maintenance help would make a difference. Landlords, busy families and older homeowners across ${region} often need ongoing support rather than a single visit. If exterior surfaces are clean but the garden lets the property down, combined maintenance restores overall presentation.`,
    options: `${brand} offers ongoing lawn care and garden maintenance tailored to each property. Regular visits through the growing season keep lawns manageable. Seasonal tidy-ups address growth that has got ahead of schedule. Garden maintenance can be booked alongside grass cutting, driveway cleaning or house washing. Jake and Martin discuss what your garden actually needs rather than selling unnecessary work.`,
    localContext: `From ${primary} to ${secondary} and villages across ${region}, gardens need regular attention through wet springs and busy summers. Customers who already trust ${brand} for exterior cleaning often add lawn care to simplify property upkeep. Search for garden maintenance near me in ${cities} and book one fully insured local team.`,
    whatToExpect: `${brand} walks through your garden, discusses priorities and agrees a maintenance plan. Regular visits keep lawns cut and edges tidy. Seasonal work addresses overgrowth and general garden presentation. Communication stays straightforward — the same friendly contact customers know from exterior cleaning quotes.`,
    whyChooseUs: `${brand} combines exterior cleaning expertise with practical garden maintenance. Customers value dealing with Jake and Martin for multiple jobs rather than chasing different trades. Fully insured, competitively priced and based locally in ${region}.`,
    benefits: [
      "Ongoing lawn care and garden maintenance through the season.",
      "Regular visits or seasonal tidy-ups tailored to your garden.",
      "One local team for exterior cleaning and garden upkeep.",
      `Free quotes across ${cities} and ${region}.`,
    ],
    process: [
      "Walk the garden and discuss maintenance priorities and frequency.",
      "Agree a plan covering mowing, edging and seasonal tidy-ups.",
      "Carry out agreed maintenance visits through the growing season.",
      "Adjust the schedule as needed and combine with exterior work where helpful.",
    ],
    faq: [
      {
        question: `Do you offer garden maintenance near me in ${region}?`,
        answer: `Yes. ${brand} maintains lawns and gardens across ${cities} and surrounding ${region} towns. Contact us on ${phone} for a free quote.`,
      },
      {
        question: "What does garden maintenance include?",
        answer: `Services typically include regular mowing, edging and seasonal tidy-ups. Specific tasks are agreed based on your garden's needs during the quote.`,
      },
      {
        question: "Can I combine garden maintenance with exterior cleaning?",
        answer: `Yes. Many customers book lawn care alongside driveway cleaning, patio washing or roof work. One team, one point of contact.`,
      },
      {
        question: "Do you maintain gardens for landlords?",
        answer: `Yes. Landlords and property managers across ${region} use ${brand} for reliable garden upkeep between tenancies and through the rental season.`,
      },
    ],
  },
  {
    slug: "free-quotes",
    title: `Free Quotes in ${cities}`,
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${fullName} for driveway cleaning, roof cleaning, patio washing, gutter clearing and lawn care in ${cities} and ${region}.`,
    cardDescription: `Message or call ${brand} to discuss exterior cleaning, roof work, biocide treatment or lawn care and arrange a free, no-obligation quote.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Free quote service icon",
    image: "/gal_02.jpg",
    imageAlt: `${fullName} exterior cleaning and lawn care in ${region}`,
    about: `Not sure where to start with exterior maintenance? ${fullName} offers free, no-obligation quotes across ${cities} and ${region}. Jake and Martin can discuss driveway cleaning, patio washing, decking cleaning, soft wash house washing, roof cleaning, gutter clearing, biocide treatment, grass cutting and garden maintenance. A quick message or call on ${phone} is enough to get the conversation started. Photos of the area help speed up quoting, especially for driveways, roofs and patios. There is no pressure — just honest advice on what your property needs and what it will cost.`,
    why: `A free quote clarifies scope, pricing and timing before any work begins, helping you compare options and book the right services with confidence.`,
    signsYouNeed: `If you know something needs attention but are unsure of cost, method or which service to book first, a free quote is the right starting point. Maybe the driveway, roof and gutters all need work — or you want lawn care alongside patio cleaning. Perhaps you have seen ${brand}'s results on Facebook and want to know if your property is in the service area. Whatever the situation, a short conversation with Jake or Martin saves guesswork.`,
    options: `${brand} quotes for every service listed on this site: driveway cleaning, patio and path cleaning, decking cleaning, soft wash house washing, roof cleaning and moss removal, gutter clearing, fascia and soffit cleaning, biocide treatments, grass cutting and garden maintenance. Contact via phone, WhatsApp, the website form or Facebook message. Combined quotes for multiple jobs are welcome — exterior cleaning and lawn care in one visit is common.`,
    localContext: `${brand} serves ${primary}, ${secondary}, Rankinston, Prestwick, Troon, Doonfoot, Alloway, Mossblown and towns across ${region}. If you are nearby, get in touch to confirm coverage. Local knowledge means realistic advice on moss, algae and garden growth typical in your area.`,
    whatToExpect: `Send a message or call with the service you need and your location. Share photos if you have them. Jake or Martin will discuss the job, confirm coverage and provide a free quote — arranging a visit first if needed for larger or complex work. Once you are happy, a date is booked and work proceeds as agreed.`,
    whyChooseUs: `Free quotes, clear communication and fully insured local service. Customers praise Jake and Martin for being genuine, fairly priced and easy to deal with. ${brand} covers exterior cleaning and lawn care so you can book one trusted team.`,
    benefits: [
      "Free, no-obligation quotes for all exterior and lawn services.",
      "Clear advice from Jake and Martin before work begins.",
      `Local coverage across ${cities} and ${region}.`,
      "Combined quotes available for multiple jobs in one visit.",
    ],
    process: [
      "Message or call with the service you need and your location.",
      "Share photos or details to help explain the job.",
      "Receive a free quote — with a visit arranged if needed.",
      "Book a date and agree practical details before work starts.",
    ],
    faq: [
      {
        question: "What details should I send for a quote?",
        answer: `A short description, your location and photos of the work area are helpful — especially for driveways, roofs, patios and garden maintenance enquiries.`,
      },
      {
        question: `Which areas do you cover near ${cities}?`,
        answer: `${brand} covers ${primary}, ${secondary}, Rankinston and towns across ${region} including Prestwick, Troon, Doonfoot and Alloway.`,
      },
      {
        question: `How do I request a free quote near me in ${region}?`,
        answer: `Call ${phone}, message via WhatsApp or Facebook, or use the website contact form. Jake or Martin will respond with a free, no-obligation quote.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getServicesForNav = () =>
  services.filter((service) => service.slug !== "free-quotes");
