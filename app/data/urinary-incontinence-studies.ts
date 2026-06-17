import type { ClinicalStudy } from "@/app/data/clinical-study-shared";

const IMG = (filename: string) =>
  encodeURI(`/images/overactive bladder studies/${filename}`);

export const URINARY_INCONTINENCE_STUDIES: ClinicalStudy[] = [
  {
    name: "Restore",
    status: "Active, Not Enrolling",
    description:
      "The Restore study is evaluating therapies designed to improve bladder function and reduce symptoms associated with urinary incontinence. The study seeks to provide patients with additional treatment options and long-term symptom relief.",
    nct: "NCT06217328",
    image: IMG("revi-device-800h.png"),
    imageAlt: "Revi implant device used in the Restore urinary incontinence study",
  },
];
