import type { Metadata } from "next";
import { CancerTreatmentDetailPage } from "@/app/components/cancer-treatment-detail-page";

const HERO_BG = encodeURI("/images/bladder cancer/Blog_Post-Bladder_Cancer.webp");

export const metadata: Metadata = {
  title: "Zusduri & BCG",
  description:
    "Information about Zusduri and BCG treatment discussions for bladder cancer at The Urology Place in San Antonio.",
};

export default function ZusduriAndBcgPage() {
  return (
    <CancerTreatmentDetailPage
      title="Zusduri & BCG"
      subtitle="Bladder cancer treatment guidance at The Urology Place"
      heroBg={HERO_BG}
      introTitle="Understanding Intravesical Treatment Discussions"
      introParagraphs={[
        "For some bladder cancer situations, treatment planning may include medicines that are placed directly into the bladder. BCG has long been part of that conversation, and newer options such as Zusduri may also be discussed in selected cases.",
        "At The Urology Place, we help patients understand when these treatments may come up, how they fit into a personalized bladder cancer plan, and what questions to ask as you review your options.",
      ]}
      highlightsTitle="Topics We May Review"
      highlights={[
        "How intravesical bladder treatments differ from surgery or systemic therapies",
        "When BCG may be part of the treatment discussion",
        "When newer treatment options such as Zusduri may be considered",
        "How follow-up, surveillance, and ongoing bladder care may fit into the plan",
      ]}
      whenToAskTitle="When to Ask About Zusduri & BCG"
      whenToAsk={[
        "You have been diagnosed with bladder cancer and want to review available treatment paths",
        "You have been told intravesical treatment may be part of your care plan",
        "You want help understanding the role of newer versus established treatment options",
        "You would like coordinated guidance before moving forward with treatment",
      ]}
      scheduleBody="To schedule a consultation with Dr. Kella and discuss bladder cancer treatment options including Zusduri and BCG, please call"
      category="Men > Bladder Cancer"
      sourcePath="/men/bladder-cancer/zusduri-bcg"
      pageName="Zusduri & BCG"
      idPrefix="men-zusduri-bcg"
    />
  );
}
