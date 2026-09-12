/*
  HELLO PRODUCTS — product data
  ------------------------------------------------------
  Edit this file to add/change products, sizes, variants, or photos.
  No HTML editing needed — products.html renders this automatically.

  Each product can have any number of "variantGroups" so different
  products can have different kinds of variants (fragrance, type, etc).

  "image" points to a file in the /images folder. To swap a photo,
  replace the file in /images (keep the same filename) or change
  the path here.
*/

const PRODUCTS = [
  {
    id: "phenyl",
    name: "Phenyl",
    description: "General-purpose floor disinfectant cleaner for homes, shops and commercial spaces.",
    image: "images/phenyl-1l.jpg",
    benefits: ["Removes tough dirt & stains", "Long lasting freshness", "Safe for all floor types", "Pleasant fragrance"],
    variantGroups: [
      { label: "Size", options: ["1L", "5L"] },
      { label: "Fragrance", options: ["Lemon", "Rose", "Mogra"] }
    ]
  },
  {
    id: "phenyl-concentrate",
    name: "Phenyl Concentrate",
    description: "Concentrated formula for buyers who dilute on-site — more cost-effective per litre of usable product.",
    image: "images/phenyl-concentrate-200ml.jpg",
    benefits: ["Concentrated — more value per litre", "Removes tough dirt & stains", "Safe for all floor types", "Available in three fragrances"],
    variantGroups: [
      { label: "Size", options: ["200ML"] },
      { label: "Fragrance", options: ["Lemon", "Rose", "Mogra"] }
    ]
  },
  {
    id: "dr-black-phenyl",
    name: "Dr. Black Phenyl",
    description: "Black floor cleaner with extra dirt-removing power for tough, heavily-used floors.",
    image: "images/black-phenyl.jpg",
    benefits: ["10% extra power to remove dirt", "Brings natural shine to floors", "Fresh fragrance, long lasting clean", "Safe for all floor types"],
    variantGroups: [
      { label: "Size", options: ["450ML", "1L", "5L"] }
    ]
  },
  {
    id: "dishwash",
    name: "Dishwash",
    description: "Grease-cutting dishwashing liquid for household and commercial use. Lemon fragrance by default.",
    image: "images/dishwash.jpg",
    benefits: ["Removes tough grease & food stains", "Gentle on hands", "Fresh lemon fragrance", "Rich lather — cleans faster"],
    variantGroups: [
      { label: "Size", options: ["500ML", "1L", "5L"] }
    ]
  },
  {
    id: "cls",
    name: "CLS",
    description: "Concentrated liquid cleaner, lemon fragrance by default.",
    image: "images/cls.jpg",
    benefits: ["Removes tough grease & food stains", "Gentle on hands", "Fresh lemon fragrance", "2X cleaning power"],
    variantGroups: [
      { label: "Size", options: ["1L"] }
    ]
  },
  {
    id: "fabric-liquid-detergent",
    name: "Fabric Liquid Detergent",
    description: "Liquid laundry detergent with Power Wash Hygiene Technology, for brighter, cleaner, fresher clothes.",
    image: "images/fabric-liquid-detergent.jpg",
    benefits: ["Removes tough stains", "Brighter clothes", "Long lasting freshness", "Safe on hands", "Safe for machine wash, hand wash & all fabrics"],
    variantGroups: [
      { label: "Size", options: ["1L", "5L"] },
      { label: "Fragrance", options: ["Dream"] }
    ]
  },
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    description: "Streak-free finish on glass, mirrors and other hard surfaces.",
    image: "images/glass-cleaner.jpg",
    benefits: ["Removes dust & smudges", "Streak-free finish", "For glass, mirrors & shiny surfaces", "Fresh lemon fragrance"],
    variantGroups: [
      { label: "Size", options: ["500ML", "5L"] },
      { label: "Fragrance", options: ["Jasmine"] }
    ]
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    description: "Heavy-duty cleaner formulated to cut through hard water stains and disinfect the bowl.",
    image: "images/toilet-cleaner.jpg",
    benefits: ["Kills 99.9% germs", "Removes tough stains", "Deep cleans & freshens", "Long lasting fragrance"],
    variantGroups: [
      { label: "Size", options: ["250ML", "500ML", "1L", "5L"] }
    ]
  },
  {
    id: "fabric-whitener",
    name: "Fabric Whitener",
    description: "Whitening liquid for fabrics, used alongside regular detergent for brighter whites.",
    image: "images/fabric-whitener.jpg",
    benefits: ["Brightens & whitens fabric", "Works alongside regular detergent", "Compact size for easy stocking"],
    variantGroups: [
      { label: "Size", options: ["500ML"] }
    ]
  },
  {
    id: "combo-pack",
    name: "Combo Packs",
    description: "Curated bundles pairing two or more products — a straightforward way to stock a full cleaning range from one supplier.",
    image: "images/combo-pack.jpg",
    benefits: ["Full cleaning range in one order", "Convenient, shelf-ready bundle", "Custom combinations available"],
    variantGroups: [
      { label: "Custom", options: ["Ask for available combinations"] }
    ]
  }
];
