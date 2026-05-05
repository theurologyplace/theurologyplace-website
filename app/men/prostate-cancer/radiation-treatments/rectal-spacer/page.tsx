import type { Metadata } from "next";
import { CancerTreatmentDetailPage } from "@/app/components/cancer-treatment-detail-page";

const HERO_BG = encodeURI("/images/prostate cancer/OR+PICTURE-2880w.JPG").replace(
  /\+/g,
  "%2B",
);

export const metadata: Metadata = {
  title: "Rectal Spacer",
  description:
    "Rectal spacer planning information for prostate radiation treatment at The Urology Place in San Antonio.",
};

export default function RectalSpacerPage() {
  return (
    <CancerTreatmentDetailPage
      title="Rectal Spacer"
      subtitle="Planning support for selected prostate radiation treatment cases"
      heroBg={HERO_BG}
      introTitle="What Is a Rectal Spacer?"
      introParagraphs={[
        "A rectal spacer is used in certain prostate radiation treatment plans to increase separation between the prostate and rectum. The goal is to help limit radiation exposure to nearby tissue during treatment planning.",
        "If radiation is being considered, Dr. Kella can help you understand when a rectal spacer may come up in the conversation and how it fits within the larger decision-making process.",
      ]}
      highlightsTitle="Why a Rectal Spacer May Be Discussed"
      highlights={[
        "It may be used to support selected prostate radiation treatment plans",
        "It is part of treatment planning rather than a standalone cancer treatment",
        "Its role depends on anatomy, radiation approach, and overall clinical goals",
        "Not every patient needs one, so individualized review is important",
      ]}
      whenToAskTitle="When to Ask About a Rectal Spacer"
      whenToAsk={[
        "You are considering radiation treatment for prostate cancer",
        "You want to understand ways to help protect nearby tissue during radiation",
        "You have questions about preparation steps before radiation begins",
        "You want coordinated input before deciding on a treatment path",
      ]}
      scheduleBody="To schedule a consultation with Dr. Kella and discuss radiation planning tools such as a rectal spacer, please call"
      category="Men > Prostate Cancer"
      sourcePath="/men/prostate-cancer/radiation-treatments/rectal-spacer"
      pageName="Rectal Spacer"
      idPrefix="men-rectal-spacer"
    />
  );
}
