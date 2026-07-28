import type {
  Stat,
  Award,
  MediaCard,
  VideoCard,
  Property,
  Neighborhood,
} from "@/types";

// ── Ethan Dao (Tung Dao) — Realtor, eXp Realty · Texas Ace Team ──
// All data researched from Zillow, Facebook, YouTube, TikTok, Instagram.
export const AGENT = {
  name: "Ethan Dao",
  legalName: "Tung Dao",
  wordmark: "ETHAN DAO",
  role: "Realtor",
  tagline: "Top Producer 2024 & 2025 · Dallas–Fort Worth",
  brokerage: "eXp Realty",
  team: "Texas Ace Team",
};

export const CONTACT = {
  phone: "(469) 989-5786",
  email: "ethandao.realtor@gmail.com",
  address1: "eXp Realty · Texas Ace Team",
  address2: "Serving the Dallas–Fort Worth Metroplex, TX",
};

export const SOCIALS = {
  facebook: "https://www.facebook.com/ethan.dao.realtortx/",
  youtube: "https://www.youtube.com/@ethandaorealtor",
  tiktok: "https://www.tiktok.com/@ethandaorealtor",
  instagram: "https://www.instagram.com/ethandao.realtor/",
  zillow: "https://www.zillow.com/profile/ethandaorealtor",
};

export const NAV_LINKS = ["BUY", "SELL", "PROPERTIES", "CONTACT"];

export const STATS: Stat[] = [
  { value: "36", label: "CLOSED SALES" },
  { value: "13", label: "SALES LAST 12 MO" },
  { value: "$369K", label: "AVERAGE SALE PRICE" },
  { value: "15K+", label: "COMMUNITY FOLLOWERS" },
];

export const ABOUT_BIO =
  "Ethan Dao (Tung Dao) is a Realtor with eXp Realty and a member of the award-winning Texas Ace Team, serving buyers, sellers, and investors across the Dallas–Fort Worth Metroplex. A recognized Top Producer, Ethan pairs sharp local market knowledge with a marketing-first approach — his property tours and neighborhood guides reach a community of more than 15,000 followers across YouTube, Facebook, TikTok, and Instagram. Originally from Tay Ho, Hanoi and an FPT University alumnus, Ethan brings a global perspective and fluent bilingual (Vietnamese–English) service to every client, making the home-buying journey in America clear, confident, and rewarding. From first-time buyers exploring new-build communities in Lavon and McKinney to families and investors upgrading across DFW, Ethan is committed to delivering real results with honesty, hustle, and heart.";

// Platforms / where to find Ethan (replaces press logos — rendered as text badges)
export const PLATFORMS = [
  "eXp Realty",
  "Texas Ace Team",
  "Zillow",
  "YouTube",
  "Facebook",
  "Instagram",
  "TikTok",
];

export const HERO_QUOTE =
  "“Helping you find beautiful, well-priced homes across Dallas–Fort Worth — and sharing everything I’ve learned about real estate in America.”";

export const BUY = {
  eyebrow: "For Buyers",
  title: "Buy with Confidence",
  body: "Whether you're a first-time buyer exploring new-build communities in Lavon, McKinney, and Wylie or an investor hunting for value across Dallas–Fort Worth, Ethan guides you through every step with local insight and honest advice. Fluent in English and Vietnamese, he makes financing, neighborhoods, and negotiations easy to understand — so you can buy with total confidence.",
  buttons: ["Buyer's Guide", "Search Homes"],
  image: "/images/ethan-newbuild.jpg",
};

export const SELL = {
  eyebrow: "For Sellers",
  title: "Sell with Strategy",
  body: "Great marketing sells homes. Ethan combines sharp pricing strategy with a video-first marketing engine — professional tours reaching a 15,000+ following across YouTube, Facebook, TikTok, and Instagram — to put your Dallas–Fort Worth property in front of the right buyers, fast. Every sale is handled with clear communication and a relentless focus on results.",
  buttons: ["Seller's Guide", "Home Valuation"],
  image: "/images/ethan-home-brick2story.jpg",
};

// Real recognition (from Texas Ace Team Top Producer awards + social community)
export const AWARDS: Award[] = [
  {
    title: "Top Producer 2026",
    org: "Texas Ace Team · eXp Realty",
    note: "Recognized among the team's top-performing agents across the DFW Metroplex.",
  },
  {
    title: "Top Producer 2025",
    org: "Texas Ace Team · eXp Realty",
    note: "Consistent top-tier sales performance and client results throughout the year.",
  },
  {
    title: "15,000+ Community",
    org: "YouTube · Facebook · TikTok · Instagram",
    note: "One of DFW's most-followed bilingual real estate voices, with weekly new content.",
  },
];

export const BEYOND_CARDS: MediaCard[] = [
  {
    title: "Ethan Dao — Mua Bán Nhà Dallas Texas",
    description:
      "A YouTube channel hunting for beautiful, well-priced homes across Dallas–Fort Worth, with a new video every week.",
    image: "/images/ethan-aerial-neighborhood.jpg",
  },
  {
    title: "Real Estate for the Vietnamese Community",
    description:
      "Bilingual guidance on buying, selling, and investing in the U.S. — breaking down the process step by step.",
    image: "/images/ethan-home-ranch.jpg",
  },
  {
    title: "Life & Business in Texas",
    description:
      "Behind-the-scenes on TikTok and Instagram — neighborhoods, open houses, and everyday life in DFW.",
    image: "/images/ethan-aerial-houston.jpg",
  },
];

// Real property-tour videos from Ethan's YouTube channel
export const VIDEO_CARDS: VideoCard[] = [
  {
    title: "Lavon 75166 — New-Build Community, 30 Min from Garland",
    address: "From $300K · Attractive builder incentives",
    poster: "/images/ethan-newbuild.jpg",
  },
  {
    title: "Wylie 75098 — 2017 Home in Inspiration Community",
    address: "Corner lot · Highly-rated schools",
    poster: "/images/ethan-home-brick2story.jpg",
  },
  {
    title: "New Homes in Lavon, Texas — $300K",
    address: "Live in or rent out right away",
    poster: "/images/ethan-listing-lavon.jpg",
  },
];

// Recent sales — real addresses & specs from Zillow (buyer-represented; sale price not public)
export const FEATURED_PROPERTIES: Property[] = [
  {
    price: "Sold",
    address: "1729 Duster Cir, Arlington, TX 76018",
    beds: 3,
    baths: 2,
    sqft: "1,457",
    image: "/images/ethan-listing-arlington.jpg",
  },
  {
    price: "Sold",
    address: "604 Tidal Dr, McKinney, TX 75071",
    beds: 4,
    baths: 3,
    sqft: "2,059",
    image: "/images/ethan-listing-mckinney-tidal.jpg",
  },
  {
    price: "Sold",
    address: "697 Poppy Ln, Lavon, TX 75166",
    beds: 4,
    baths: 2,
    sqft: "1,791",
    image: "/images/ethan-listing-lavon.jpg",
  },
  {
    price: "Sold",
    address: "7013 Birdwatch Dr, Garland, TX 75043",
    beds: 4,
    baths: 3,
    sqft: "2,100",
    image: "/images/ethan-listing-garland.jpg",
  },
  {
    price: "Sold",
    address: "4438 Verbena St, Midlothian, TX 76065",
    beds: 4,
    baths: 3,
    sqft: "2,340",
    image: "/images/ethan-listing-midlothian.jpg",
  },
];

// Homes across DFW — real addresses; status reflects Zillow (sold vs active for-sale)
export const LISTINGS: Property[] = [
  { price: "$495,000", status: "For Sale", address: "3508 Almond Ln, McKinney, TX 75070", beds: 4, baths: 3, sqft: "3,045", image: "/images/ethan-home-brick2story.jpg" },
  { price: "$99,000", status: "For Sale", address: "LOT 156 Bison Ridge Dr, Stephenville, TX 76401", sqft: "Lot / Land", image: "/images/ethan-aerial-neighborhood.jpg" },
  { price: "Sold", status: "Sold", address: "1729 Duster Cir, Arlington, TX 76018", beds: 3, baths: 2, sqft: "1,457", image: "/images/ethan-listing-arlington.jpg" },
  { price: "Sold", status: "Sold", address: "604 Tidal Dr, McKinney, TX 75071", beds: 4, baths: 3, sqft: "2,059", image: "/images/ethan-listing-mckinney-tidal.jpg" },
  { price: "Sold", status: "Sold", address: "697 Poppy Ln, Lavon, TX 75166", beds: 4, baths: 2, sqft: "1,791", image: "/images/ethan-listing-lavon.jpg" },
  { price: "Sold", status: "Sold", address: "7013 Birdwatch Dr, Garland, TX 75043", beds: 4, baths: 3, sqft: "2,100", image: "/images/ethan-listing-garland.jpg" },
  { price: "Sold", status: "Sold", address: "4438 Verbena St, Midlothian, TX 76065", beds: 4, baths: 3, sqft: "2,340", image: "/images/ethan-listing-midlothian.jpg" },
];

export const NEIGHBORHOODS: Neighborhood[] = [
  { name: "McKinney", image: "/images/ethan-listing-mckinney-tidal.jpg" },
  { name: "Lavon", image: "/images/ethan-newbuild.jpg" },
  { name: "Garland", image: "/images/ethan-listing-garland.jpg" },
];

export const VALUATION = {
  title: "How much is your Dallas–Fort Worth home worth?",
  bullets: ["Instant property valuation", "Expert local advice", "Sell for more"],
  cta: "Get a Free Home Valuation",
  bg: "/images/ethan-aerial-neighborhood.jpg",
};

export const NEWSLETTER = {
  title: "Where Expertise Meets Excellence",
  body: "Stay in the know with the latest Dallas–Fort Worth real estate trends, new-build releases, and market insights. Don't miss the opportunities that can shape your next move. Sign up today for a front-row seat to the best homes and deals across DFW.",
  consent:
    "I agree to be contacted by Ethan Dao via call, email, and text for real estate services. To opt out, reply 'stop' at any time or reply 'help' for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary.",
};

export const WORK_WITH = {
  title: "Work With Ethan",
  body: "Ready to make your move in Dallas–Fort Worth? Whether you're buying your first home, selling for top dollar, or building an investment portfolio, Ethan Dao is committed to delivering an exceptional, honest experience from first showing to closing day. Reach out today — let's get started.",
  cta: "Let's Connect",
  bg: "/images/ethan-home-brick2story.jpg",
};

export const FOOTER_LINKS = [
  "HOME",
  "ABOUT ETHAN",
  "RECENT SALES",
  "NEIGHBORHOODS",
  "HOME VALUATION",
  "CONTACT",
];
