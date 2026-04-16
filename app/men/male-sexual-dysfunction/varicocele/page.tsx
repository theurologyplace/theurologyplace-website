import type { Metadata } from "next";
import { VaricocelePageContent } from "@/app/components/varicocele-page-content";

export const metadata: Metadata = {
  title: "Varicocele Treatment in San Antonio, TX",
  description:
    "Varicocele embolization at The Urology Place in San Antonio. Minimally invasive, image-guided treatment for pain relief and fertility support without surgery.",
};

export default function VaricocelePage() {
  return <VaricocelePageContent />;
}
