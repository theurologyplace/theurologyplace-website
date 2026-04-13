import type { Metadata } from "next";
import { VanquishPageContent } from "@/app/components/vanquish-page-content";

export const metadata: Metadata = {
  title: "Vanquish (Water Vapor Ablation)",
  description:
    "Vanquish water vapor ablation for BPH symptoms at The Urology Place in San Antonio. Minimally invasive prostate therapy with personalized evaluation and care.",
};

export default function VanquishPage() {
  return <VanquishPageContent />;
}
