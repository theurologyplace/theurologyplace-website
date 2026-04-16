import type { Metadata } from "next";
import { ProstaticArteryEmbolizationPageContent } from "@/app/components/prostatic-artery-embolization-page-content";

export const metadata: Metadata = {
  title: "Prostate Artery Embolization (PAE) in San Antonio, TX",
  description:
    "Prostate artery embolization (PAE) for enlarged prostate (BPH) at The Urology Place in San Antonio. Advanced, minimally invasive outpatient treatment without traditional surgery.",
};

export default function ProstaticArteryEmbolizationPage() {
  return <ProstaticArteryEmbolizationPageContent />;
}
