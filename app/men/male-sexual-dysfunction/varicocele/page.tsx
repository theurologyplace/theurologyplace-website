import type { Metadata } from "next";
import { VaricocelePageContent } from "@/app/components/varicocele-page-content";

export const metadata: Metadata = {
  title: "Varicocele",
  description:
    "Varicocele evaluation and treatment options at The Urology Place in San Antonio. Expert care for scrotal pain, fertility concerns, and testicular health.",
};

export default function VaricocelePage() {
  return <VaricocelePageContent />;
}
