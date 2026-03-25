/**
 * Press / "In the news" tiles for GAINSWave (display-only; links optional later).
 */
export type GainswaveNewsItem =
  | { kind: "publication"; title: string; subtitle: string }
  | { kind: "stat"; line: string }
  | { kind: "brand"; label: string; variant: "mens-health" | "maxim" | "researchgate" | "journal" }
  | { kind: "quote"; quote: string; attribution: string };

export const GAINSWAVE_IN_THE_NEWS: GainswaveNewsItem[] = [
  {
    kind: "publication",
    title: "Urology Times",
    subtitle: "The leading news source for urologists",
  },
  {
    kind: "publication",
    title: "The World Journal of Men's Health",
    subtitle: "Peer-reviewed research in men's health",
  },
  { kind: "stat", line: "No downtime. No side effects." },
  { kind: "brand", label: "Men's Health", variant: "mens-health" },
  { kind: "brand", label: "MAXIM", variant: "maxim" },
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
  { kind: "brand", label: "ResearchGate", variant: "researchgate" },
  {
    kind: "brand",
    label: "Sexual Medicine Reviews",
    variant: "journal",
  },
  { kind: "stat", line: "76% success rate." },
];
