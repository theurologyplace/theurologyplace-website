import type { Metadata } from "next";
import { VanquishPageContent } from "@/app/components/vanquish-page-content";

export const metadata: Metadata = {
  title: "Vanquish Water Vapor Therapy in San Antonio, TX",
  description:
    "Vanquish Water Vapor Therapy at The Urology Place in San Antonio — minimally invasive prostate tissue ablation using water vapor. VAPOR-2 trial site; consultations and scheduling information.",
};

export default function VanquishPage() {
  return <VanquishPageContent />;
}
