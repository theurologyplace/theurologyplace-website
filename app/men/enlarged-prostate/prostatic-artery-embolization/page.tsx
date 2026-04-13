import type { Metadata } from "next";
import { ProstaticArteryEmbolizationPageContent } from "@/app/components/prostatic-artery-embolization-page-content";

export const metadata: Metadata = {
  title: "Prostatic Artery Embolization (PAE)",
  description:
    "Prostatic artery embolization (PAE) for enlarged prostate (BPH) at The Urology Place in San Antonio. Minimally invasive care with coordinated evaluation and follow-up.",
};

export default function ProstaticArteryEmbolizationPage() {
  return <ProstaticArteryEmbolizationPageContent />;
}
