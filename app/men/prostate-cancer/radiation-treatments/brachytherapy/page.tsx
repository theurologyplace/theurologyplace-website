import type { Metadata } from "next";
import { CancerTreatmentDetailPage } from "@/app/components/cancer-treatment-detail-page";

const HERO_BG = encodeURI("/images/prostate cancer/OR+PICTURE-2880w.JPG").replace(
  /\+/g,
  "%2B",
);

export const metadata: Metadata = {
  title: "Brachytherapy",
  description:
    "Brachytherapy information for prostate cancer patients at The Urology Place in San Antonio.",
};

export default function BrachytherapyPage() {
  return (
    <CancerTreatmentDetailPage
      title="Brachytherapy"
      subtitle="A radiation-based prostate cancer option for selected patients"
      heroBg={HERO_BG}
      introTitle="What Is Brachytherapy?"
      introParagraphs={[
        "Brachytherapy is a form of radiation treatment that places radiation sources in or near the prostate. It may be discussed for certain patients as part of a personalized prostate cancer treatment plan.",
        "At The Urology Place, we help patients understand when brachytherapy may be worth exploring, how it fits with other treatment options, and when referral to a radiation oncology specialist is appropriate.",
      ]}
      highlightsTitle="What to Know About Brachytherapy"
      highlights={[
        "It is a radiation treatment option used in selected prostate cancer situations",
        "Treatment planning depends on cancer characteristics, prostate size, and overall goals",
        "It may be considered on its own or as part of a broader treatment discussion",
        "A full consultation helps determine whether it fits your diagnosis and priorities",
      ]}
      whenToAskTitle="When to Ask About Brachytherapy"
      whenToAsk={[
        "You have been diagnosed with prostate cancer and want to compare radiation options",
        "You are interested in learning about internal radiation approaches",
        "You are reviewing alternatives to surgery or other treatment pathways",
        "You want coordinated guidance before meeting with additional specialists",
      ]}
      scheduleBody="To schedule a consultation with Dr. Kella and review whether brachytherapy may be appropriate, please call"
      category="Men > Prostate Cancer"
      sourcePath="/men/prostate-cancer/radiation-treatments/brachytherapy"
      pageName="Brachytherapy"
      idPrefix="men-brachytherapy"
    />
  );
}
