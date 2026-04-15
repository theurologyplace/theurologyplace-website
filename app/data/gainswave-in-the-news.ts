/**
 * Press, testimonials, and highlights for the GAINSWave "In the news" section.
 * Article cards link to the publication or outlet (homepage or hub when no single article is curated).
 */

export type GainswaveNewsArticle = {
  kind: "article";
  source: string;
  tagline?: string;
  badge?: string;
  href: string;
  /** Colored header band when `image` is not set */
  logoVariant?: "mens-health" | "maxim" | "researchgate" | "journal" | "neutral";
  image?: { src: string; alt: string };
};

export type GainswaveNewsQuote = {
  kind: "quote";
  quote: string;
  attribution?: string;
};

export type GainswaveNewsStat = {
  kind: "stat";
  value: string;
  description: string;
};

export type GainswaveNewsItem = GainswaveNewsArticle | GainswaveNewsQuote | GainswaveNewsStat;

export const GAINSWAVE_IN_THE_NEWS: GainswaveNewsItem[] = [
  {
    kind: "article",
    source: "Urology Times",
    tagline: "The leading news source for urologists",
    href: "https://www.urologytimes.com/",
    logoVariant: "neutral",
  },
  {
    kind: "article",
    source: "The World Journal of Men's Health",
    tagline: "Peer-reviewed research in men's health",
    badge: "Journal",
    href: "https://wjmh.org/",
    logoVariant: "neutral",
  },
  {
    kind: "stat",
    value: "0",
    description: "Downtime with this in-office protocol — no surgery and drug-free for many treatment plans.",
  },
  {
    kind: "article",
    source: "Men's Health",
    tagline: "Coverage of men's wellness and sexual health",
    href: "https://www.menshealth.com/",
    logoVariant: "mens-health",
  },
  {
    kind: "article",
    source: "MAXIM",
    tagline: "Lifestyle and men's interest media",
    href: "https://www.maxim.com/",
    logoVariant: "maxim",
  },
  {
    kind: "quote",
    quote:
      "I would recommend GAINSWave to anybody that wants to stay in the game. Period.",
    attribution: "R.O.",
  },
  {
    kind: "quote",
    quote:
      "GAINSWave really changed all that. Even after I'm done, me and my wife are able to keep on going and going. It's crazy!",
    attribution: "NBA Hall of Fame Superstar, Dennis Rodman",
  },
  {
    kind: "article",
    source: "ResearchGate",
    tagline: "Scientific papers and professional discourse",
    href: "https://www.researchgate.net/",
    logoVariant: "researchgate",
  },
  {
    kind: "article",
    source: "Sexual Medicine Reviews",
    tagline: "Scholarly reviews in sexual medicine",
    badge: "Journal",
    href: "https://www.sciencedirect.com/journal/sexual-medicine-reviews",
    logoVariant: "journal",
  },
  {
    kind: "stat",
    value: "76%",
    description: "Success rate reported in published studies for shockwave protocols in appropriate candidates.",
  },
];
