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
    parentCategorySlug: "exterior-cleaning-ayrshire",
    description: `Professional driveway cleaning and pressure washing in ${cities} and across ${region}. Block paving, tarmac and concrete restored. Biocide treatment available. Fully insured. Free quotes.`,
    cardDescription: `Deep driveway cleaning, pressure washing and block paving restoration across ${cities} and ${region}. Weed removal, re-sanding and biocide treatments to bring back colour and grip.`,
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Driveway cleaning service icon",
    image: "/gal_01.jpg",
    imageAlt: `Driveway pressure washing completed by ${fullName} in ${region}`,
    about: `${fullName} specialises in driveway cleaning for homes across ${region}. Years of moss, algae, weeds and tyre marks can make block paving, tarmac and concrete look tired and feel slippery underfoot. Jake uses professional pressure washing equipment to deep clean driveways, lift ingrained dirt and restore the original colour of the surface. Work can include weed removal from joints, re-sanding block paving where needed, and biocide treatment to help slow regrowth. The team focuses on a thorough clean and a finish customers are proud to show off.`,
    why: `A properly cleaned driveway improves kerb appeal, reduces slip risk in wet weather and helps protect paving from long-term damage caused by moss holding moisture against the surface.`,
    signsYouNeed: `Green moss between block paving joints, black algae patches, weeds growing through the surface and slippery areas after rain are all signs your driveway needs professional cleaning. If sand has washed out of block paving, joints can loosen and weeds take hold more quickly. Dark staining from oil, leaves and general grime often builds up gradually until the drive looks noticeably dull compared with neighbouring properties. Leaving moss and algae too long can make the surface harder to clean and increase the risk of slips for family and visitors.`,
    options: `${brand} offers pressure washing for tarmac, concrete and block paving driveways, with optional weed removal, joint re-sanding and biocide treatment to help prevent regrowth. Lighter cleans suit recently stained surfaces, while full deep cleans tackle years of built-up grime. Biocide can be applied after washing to treat algae and moss at root level. If your patio or paths need attention at the same time, driveway cleaning can be booked alongside patio and path cleaning for a coordinated exterior refresh. Call ${phone} or message for a free, no-obligation quote.`,
    localContext: `Driveways across Doonfoot, Prestwick, Troon and surrounding ${region} towns face damp weather, shaded corners and heavy use from vehicles. Block paving is especially common and benefits from periodic deep cleaning and re-sanding. If you are searching for driveway cleaning near me in ${region}, ${brand} works locally with competitive prices, reliable scheduling and fully insured service.`,
    whatToExpect: `When you contact ${brand}, Jake will discuss the driveway surface, access and level of staining. A visit can be arranged if helpful to assess block paving condition and joint sand. On the day, the area is prepared, pressure washed with care for the surface type, and weeds removed from joints where agreed. Re-sanding and biocide treatment follow where quoted. The driveway is left noticeably cleaner with improved colour and grip.`,
    whyChooseUs: `Customers across ${region} recommend ${brand} for thorough driveway cleaning, fair pricing and friendly communication. Jake takes pride in restoring driveways to a fresh, bright finish — not a quick splash and go. Fully insured, free quotes and reliable local service make booking straightforward.`,
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
        question: `Do you clean block paving driveways across ${region}?`,
        answer: `Yes. ${brand} deep cleans block paving, tarmac and concrete driveways across ${region}. Weed removal, re-sanding and biocide treatment can be included in your quote.`,
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
    parentCategorySlug: "exterior-cleaning-ayrshire",
    description: `Patio and path cleaning in ${cities} and ${region}. Pressure washing for slabs, flags and garden paths. Weed removal and biocide treatment. Fully insured. Free quotes.`,
    cardDescription: `Garden slabs, patios and paths deep cleaned across ${cities}. Algae, moss and weeds removed with professional pressure washing and biocide treatments.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Patio and path cleaning service icon",
    image: "/gal_02.jpg",
    imageAlt: `Patio pressure washing completed by ${fullName} in ${region}`,
    about: `Patios and garden paths take a beating from Scottish weather. Moss, algae and weeds between slabs can make outdoor areas look neglected and become dangerously slippery when wet. ${fullName} provides patio and path cleaning across ${region}, using professional pressure washing to lift years of grime from concrete slabs, natural stone, flags and block paving. Jake has cleaned garden paths for customers who simply wanted a safer, brighter space to enjoy — with results that speak for themselves in local reviews. Biocide treatment can be applied after washing to help tackle algae and moss at source, keeping patios looking better for longer.`,
    why: `Clean patios and paths are safer to walk on, easier to maintain and make gardens feel more inviting — especially before summer gatherings or when preparing a property for sale.`,
    signsYouNeed: `Slippery green algae on patio slabs, moss growing in shaded corners, weeds pushing through joints and a generally dull, grey appearance are clear signs cleaning is overdue. If you avoid using certain areas of the garden after rain, algae build-up is likely the cause. Black spot staining on natural stone and ingrained dirt along frequently used paths worsen over time. Paths leading to front doors and side gates are especially important to keep safe for post, deliveries and elderly relatives visiting your home.`,
    options: `${brand} pressure washes patios, garden paths, side passages and utility areas. Light cleans refresh recently stained surfaces, while full deep cleans tackle heavy moss and algae. Weed removal from joints and biocide treatment help slow regrowth. Patio cleaning pairs well with driveway cleaning or house washing if you want the whole exterior refreshed in one visit. Soft wash options may suit delicate surfaces or areas close to planted borders. Contact Jake on ${phone} for advice and a free quote.`,
    localContext: `Properties across Alloway, Mossblown and across ${region} often have shaded patios that green up quickly through autumn and winter. Coastal humidity and frequent rain accelerate algae growth on paths and slabs. If you need patio cleaning near me in ${region}, ${brand} provides local, fully insured service with the same attention to detail shown on driveways and roofs.`,
    whatToExpect: `${brand} reviews the patio or path material, drainage and how heavily soiled the area is. Furniture can be moved where possible before washing begins. Slabs and paths are pressure washed systematically, with weeds cleared from joints where agreed. Biocide is applied if quoted. The area is left cleaner, brighter and noticeably safer underfoot.`,
    whyChooseUs: `Local customers praise ${brand} for transforming tired garden slabs and paths. Jake arrives on time, works neatly and leaves outdoor areas looking refreshed. Competitive pricing, biocide options and free quotes make it easy to book patio cleaning alongside other exterior work.`,
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
        question: `Do you offer patio cleaning near me in ${region}?`,
        answer: `Yes. ${brand} cleans patios and garden paths across ${region}. Message us with your location for a free quote.`,
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
    slug: "soft-wash-house-washing",
    title: `Soft Wash & House Washing in ${cities}`,
    shortTitle: "House Washing",
    navTitle: "House Washing",
    parentCategorySlug: "exterior-cleaning-ayrshire",
    description: `Soft wash and house washing in ${cities} and ${region}. Exterior walls, render, UPVC, windows and doors cleaned safely. Biocide treatment. Free quotes.`,
    cardDescription: `Low-pressure soft wash house washing across ${cities}. Walls, render, UPVC, windows and doors treated to remove algae and refresh kerb appeal.`,
    iconUrl: `${serviceIconBase}/670f922ca00205c2937593ea_service-04.svg`,
    iconAlt: "Soft wash house washing service icon",
    image: "/gal_04.jpg",
    imageAlt: `Soft wash house washing by ${fullName} in ${region}`,
    about: `Exterior walls, render, UPVC cladding, windows, doors and cladding all collect algae, pollution and weather staining over time. ${fullName} provides soft wash house washing across ${region} — a low-pressure approach that cleans thoroughly without the risks of aggressive pressure washing on delicate surfaces. Jake has followed up driveway cleans with full soft wash treatments covering windows and doors, with chemical treatment to help prevent weeds and algae returning. The result is a property that looks noticeably fresher from the street and feels well cared for.`,
    why: `Soft washing removes green and black staining from exterior surfaces safely, improving kerb appeal and helping protect render, paint and UPVC from long-term damage caused by biological growth.`,
    signsYouNeed: `Green algae on render or pebbledash, black streaks on walls, dirty UPVC cladding, dull window frames all suggest house washing would make a visible difference. North-facing walls and areas under trees green up fastest in ${region}'s damp climate. If neighbours have recently cleaned their exteriors and your property looks noticeably darker by comparison, a soft wash can restore balance. Properties being prepared for sale or rental often benefit from a full exterior refresh.`,
    options: `${brand} soft washes exterior walls, render, pebbledash, UPVC, soffits, fascia, windows and doors. Treatments are selected to suit the surface and level of staining. Biocide can be applied to help slow regrowth on walls. House washing pairs naturally with driveway, patio or roof cleaning for a complete property refresh. Jake assesses each job individually rather than using a one-size-fits-all approach.`,
    localContext: `Homes across Rankinston and ${region} face persistent damp conditions that encourage algae on render and UPVC. Coastal properties near Prestwick and Troon also deal with salt and wind exposure. If you are looking for house washing near me in ${region}, ${brand} offers fully insured soft wash cleaning with free quotes.`,
    whatToExpect: `${brand} discusses which exterior surfaces need attention and any access considerations. The soft wash solution is applied to walls, render, UPVC or cladding as quoted, allowed to work on biological growth, then rinsed at low pressure. Windows, doors and delicate areas are treated with care. Biocide follows where agreed. The property is left visibly cleaner with improved kerb appeal.`,
    whyChooseUs: `Customers praise ${brand} for soft wash results that cover every area — not just the obvious front wall. Jake's follow-up approach to treating windows and doors has earned five-star feedback. Fully insured, competitively priced and easy to contact on ${phone}.`,
    benefits: [
      "Low-pressure soft wash safe for render, UPVC and painted surfaces.",
      "Walls, windows, doors and cladding cleaned thoroughly.",
      "Biocide treatment available to help slow algae and weed regrowth.",
      `Free quotes across ${cities} and ${region}.`,
    ],
    process: [
      "Discuss which exterior surfaces need cleaning and assess access.",
      "Apply soft wash solution suited to the material and staining.",
      "Rinse at low pressure, treating windows and doors with care.",
      "Apply biocide where quoted and leave the property looking refreshed.",
    ],
    faq: [
      {
        question: "What is the difference between soft wash and pressure washing?",
        answer: `Soft wash uses low pressure and cleaning solutions to lift algae and dirt safely from render, UPVC and painted surfaces. Pressure washing suits harder surfaces like driveways and patios.`,
      },
      {
        question: `Do you offer house washing near me in ${region}?`,
        answer: `Yes. ${brand} provides soft wash house washing across ${region}. Message us with photos of your property for a free quote.`,
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
    parentCategorySlug: "roof-cleaning-ayrshire",
    description: `Roof cleaning and moss removal in ${cities} and ${region}. Safe scrape method — no harsh pressure on tiles. Biocide treatment. Fully insured. Free quotes.`,
    cardDescription: `Safe roof cleaning and moss removal across ${cities}. Manual scrape method and biocide treatment — no harsh pressure washing on roof tiles.`,
    iconUrl: `${serviceIconBase}/670f922acd8bf79374aa2c10_service-01.svg`,
    iconAlt: "Roof cleaning and moss removal service icon",
    image: "/gal_05.jpg",
    imageAlt: `Roof cleaning and moss removal by ${fullName} in ${region}`,
    about: `Moss on roof tiles is more than a cosmetic problem. It holds moisture against the surface, can contribute to premature wear and breaks away into gutters over time. ${fullName} provides roof cleaning and moss removal across ${region} using a careful scrape method — manually removing moss without harsh pressure washing on tiles. Jake treats the roof with professional biocide afterwards to help prevent rapid regrowth. Customers have praised the team for leaving roofs clean, treated and gutters cleared as part of the same job. The approach prioritises the long-term condition of your roof over a quick blast that could damage tiles.`,
    why: `Removing moss and treating the roof improves appearance, helps rainwater drain properly and can reduce the risk of blocked gutters and premature tile wear in ${region}'s damp climate.`,
    signsYouNeed: `Visible green moss on roof tiles, dark streaks from algae, moss debris in gutters and a roof that looks noticeably greener than neighbouring properties all indicate cleaning is needed. If gutters overflow after rain or you see moss falling onto driveways and paths below, the roof is shedding growth that should be removed at source. North-facing and shaded roof slopes green up first. Delaying treatment allows moss to thicken, making removal harder and increasing moisture retention against tiles.`,
    options: `${brand} manually scrapes moss from roof tiles, clears loose debris and applies biocide treatment to help slow regrowth. Gutter clearing and fascia cleaning can be added to the same visit. The team does not use harsh pressure washing on roof tiles — the scrape-and-biocide method is safer for tile condition. Roof cleaning can be combined with driveway or house washing for a full exterior refresh. Free quotes explain exactly what is recommended for your roof type.`,
    localContext: `${region}'s wet weather makes moss build-up common on roofs in Rankinston and surrounding towns. Properties near trees and sheltered valleys see faster growth. If you need roof cleaning near me in ${region}, ${brand} offers fully insured, scrape-method cleaning with biocide treatment.`,
    whatToExpect: `${brand} assesses the roof, access and extent of moss growth before quoting. On the day, moss is manually scraped from tiles, debris cleared and biocide applied to treated areas. Gutters can be cleared as part of the job where agreed. The roof is left clean, treated and visibly improved from street level.`,
    whyChooseUs: `Local reviews highlight ${brand}'s roof work — clean, treated and gutters dealt with in one visit. Jake uses the scrape method customers trust, not aggressive pressure that risks tile damage. Fully insured, free quotes and honest advice on what your roof actually needs.`,
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
    parentCategorySlug: "roof-cleaning-ayrshire",
    description: `Gutter clearing, fascia and soffit cleaning in ${cities} and ${region}. Blocked gutters cleared, UPVC refreshed. Fully insured. Free quotes.`,
    cardDescription: `Gutter clearing and fascia/soffit cleaning across ${cities}. Blockages removed, overflow issues addressed and exterior trim refreshed.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Gutter clearing and fascia cleaning service icon",
    image: "/gal_06.jpg",
    imageAlt: `Gutter clearing and fascia cleaning by ${fullName} in ${region}`,
    about: `Blocked gutters can cause overflow, staining on walls and water damage over time. ${fullName} provides gutter clearing, fascia cleaning and soffit cleaning across ${region}. Moss and debris from roofs commonly ends up in gutters — customers have had gutters replaced and cleared as part of broader roof and driveway work by Jake. Fascia and soffit boards also collect dirt and algae, making the roofline look tired. ${brand} clears blockages, flushes gutters where needed and cleans UPVC fascia and soffits to refresh the property's appearance.`,
    why: `Clear gutters move rainwater away from walls and foundations properly. Clean fascia and soffits complete the roofline and improve kerb appeal alongside roof and exterior cleaning work.`,
    signsYouNeed: `Water overflowing during rain, plants growing in gutters, sagging gutter sections, staining on exterior walls below the roofline and dirty fascia boards all signal maintenance is overdue. Moss debris from roof cleaning often accelerates blockages. If you have not cleared gutters in several years, a build-up of leaves, moss and silt is likely. Visible green or black staining on white UPVC fascia makes the whole property look neglected from the street.`,
    options: `${brand} clears gutter blockages, flushes downpipes where accessible and cleans fascia and soffit boards. Gutter clearing is commonly booked with roof cleaning and moss removal. Fascia and soffit cleaning can also pair with soft wash house washing. Where gutters are damaged, the team can advise on replacement — customers have had gutters replaced during broader exterior maintenance visits. Contact ${phone} for a free quote.`,
    localContext: `Properties across ${region} face heavy leaf fall, moss debris and frequent rain that tests guttering systems. Older housing stock and tree-lined streets see faster blockages. Search for gutter cleaning near me in ${region} and ${brand} provides local, fully insured service.`,
    whatToExpect: `${brand} inspects gutters, downpipes and the roofline before work begins. Blockages are cleared and gutters flushed where agreed. Fascia and soffit boards are cleaned to lift dirt and algae staining. The roofline is left functional and visibly tidier. Any concerns about damaged guttering are flagged honestly.`,
    whyChooseUs: `Customers trust ${brand} for gutter work completed alongside roof cleaning — not as an afterthought. Jake communicates clearly, works neatly and leaves gutters flowing properly. Fully insured, free quotes and reliable scheduling across ${region}.`,
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
        question: `Do you offer gutter cleaning near me in ${region}?`,
        answer: `Yes. ${brand} clears gutters across ${region}. Book standalone gutter clearing or combine it with roof cleaning.`,
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
    parentCategorySlug: "roof-cleaning-ayrshire",
    description: `Professional biocide treatments in ${cities} and ${region}. Roofs, driveways, patios and walls treated to slow moss and algae regrowth. Free quotes.`,
    cardDescription: `Biocide treatments for roofs, driveways, patios and exterior walls across ${cities}. Slow moss, algae and weed regrowth after cleaning.`,
    iconUrl: `${serviceIconBase}/670f922a0e27a271e441091e_service-03.svg`,
    iconAlt: "Biocide treatment service icon",
    image: "/hero.jpg",
    imageAlt: `Exterior biocide treatment by ${fullName} in ${region}`,
    about: `Cleaning alone removes visible moss and algae, but regrowth in ${region}'s damp climate can return surprisingly quickly without treatment. ${fullName} applies professional biocide treatments to roofs, driveways, patios, paths, walls and fencing across ${region}. Biocide works at root level to help slow regrowth after pressure washing or roof scraping. Jake has used chemical treatment after soft wash house washing to stop weeds coming back on paths, fencing and exterior surfaces — with results customers describe as looking absolutely perfect. Biocide is a key part of ${brand}'s long-lasting exterior maintenance approach.`,
    why: `Biocide treatment extends the results of cleaning by tackling biological growth at source, reducing how quickly moss, algae and weeds return to driveways, roofs and exterior walls.`,
    signsYouNeed: `If moss and algae return within months of cleaning, or weeds keep sprouting between block paving joints, biocide treatment is likely worthwhile. Properties in shaded, damp locations across ${region} see the fastest regrowth. Roofs cleaned without biocide often green up again within a year or two. Driveways and patios with recurring algae benefit from post-wash treatment. If you want longer-lasting results from exterior cleaning, biocide should be part of the conversation.`,
    options: `${brand} applies biocide after roof cleaning, driveway washing, patio cleaning and soft wash house washing. Treatments are matched to the surface — roofs, block paving, render, fencing and paths each have appropriate approaches. Biocide can be booked as a follow-up to previous cleaning or as part of a combined quote. Jake explains what treatment involves and how it supports longer-lasting results.`,
    localContext: `Damp ${region} weather means biological regrowth is a constant challenge for properties across the county. Coastal humidity, tree cover and shaded gardens all accelerate moss and algae. Biocide treatment is standard practice for ${brand} customers who want cleaning results that last.`,
    whatToExpect: `After cleaning or scraping, ${brand} applies biocide to the treated surfaces. The solution is left to work on moss, algae and spores at root level. No harsh rinsing is needed immediately — the treatment continues working over time. Jake explains aftercare and realistic expectations for regrowth timelines in your area.`,
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
        answer: `${brand} applies professional biocide products correctly and advises on any brief precautions needed around treated areas. Ask Jake about your specific setup when quoting.`,
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
    slug: "free-quotes",
    title: `Free Quotes in ${cities}`,
    shortTitle: "Free Quotes",
    navTitle: "Free Quotes",
    parentCategorySlug: null,
    description: `Request a free quote from ${fullName} for driveway cleaning, roof cleaning, patio washing, gutter clearing and soft wash in ${region}.`,
    cardDescription: `Message or call ${brand} to discuss exterior cleaning, roof work, biocide treatment and arrange a free, no-obligation quote.`,
    iconUrl: `${serviceIconBase}/670f922a6c5c1d8102612221_service-02.svg`,
    iconAlt: "Free quote service icon",
    image: "/gal_02.jpg",
    imageAlt: `${fullName} exterior cleaning in ${region}`,
    about: `Not sure where to start with exterior maintenance? ${fullName} offers free, no-obligation quotes across ${region}. Jake can discuss driveway cleaning, patio washing, decking cleaning, soft wash house washing, roof cleaning, gutter clearing and biocide treatment. A quick message or call on ${phone} is enough to get the conversation started. Photos of the area help speed up quoting, especially for driveways, roofs and patios. There is no pressure — just honest advice on what your property needs and what it will cost.`,
    why: `A free quote clarifies scope, pricing and timing before any work begins, helping you compare options and book the right services with confidence.`,
    signsYouNeed: `If you know something needs attention but are unsure of cost, method or which service to book first, a free quote is the right starting point. Maybe the driveway, roof and gutters all need work — or you want patio cleaning alongside a soft wash. Perhaps you have seen ${brand}'s results on Facebook and want to know if your property is in the service area. Whatever the situation, a short conversation with Jake saves guesswork.`,
    options: `${brand} quotes for every service listed on this site: driveway cleaning, patio and path cleaning, decking cleaning, soft wash house washing, roof cleaning and moss removal, gutter clearing, fascia and soffit cleaning and biocide treatments. Contact via phone, WhatsApp, the website form or Facebook message. Combined quotes for multiple jobs are welcome.`,
    localContext: `${brand} serves Rankinston, Prestwick, Troon, Doonfoot, Alloway, Mossblown and towns across ${region}. If you are nearby, get in touch to confirm coverage. Local knowledge means realistic advice on moss and algae typical in your area.`,
    whatToExpect: `Send a message or call with the service you need and your location. Share photos if you have them. Jake will discuss the job, confirm coverage and provide a free quote — arranging a visit first if needed for larger or complex work. Once you are happy, a date is booked and work proceeds as agreed.`,
    whyChooseUs: `Free quotes, clear communication and fully insured local service. Customers praise Jake for being genuine, fairly priced and easy to deal with. ${brand} covers all exterior cleaning services so you can book one trusted team.`,
    benefits: [
      "Free, no-obligation quotes for all exterior cleaning services.",
      "Clear advice from Jake before work begins.",
      `Local coverage across ${region}.`,
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
        answer: `A short description, your location and photos of the work area are helpful — especially for driveways, roofs and patios.`,
      },
      {
        question: `Which areas do you cover in ${region}?`,
        answer: `${brand} covers Rankinston and towns across ${region} including Prestwick, Troon, Doonfoot and Alloway.`,
      },
      {
        question: `How do I request a free quote near me in ${region}?`,
        answer: `Call ${phone}, message via WhatsApp or Facebook, or use the website contact form. Jake will respond with a free, no-obligation quote.`,
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getServicesForNav = () =>
  services.filter((service) => service.slug !== "free-quotes");
