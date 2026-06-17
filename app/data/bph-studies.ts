import type { ClinicalStudy } from "@/app/data/clinical-study-shared";

const IMG = (filename: string) =>
  encodeURI(`/images/bph studies/${filename}`).replace(/\+/g, "%2B");

export const BPH_STUDIES: ClinicalStudy[] = [
  {
    name: "OLYMPUS",
    status: "Active and Enrolling",
    description:
      "The OLYMPUS study is evaluating innovative therapies for benign prostatic hyperplasia (BPH). Researchers aim to determine whether these approaches can improve urinary symptoms and quality of life for men with enlarged prostates.",
    nct: "NCT04757116",
    image: IMG("photo-1589447388921-2c2c70d26d0a-2880w.jpg"),
    imageAlt: "Medical illustration representing BPH clinical research",
  },
  {
    name: "ALPFA",
    status: "Coming Soon",
    description:
      "The ALPFA study will investigate emerging therapies for men with enlarged prostates and lower urinary tract symptoms. The goal is to expand treatment options and improve quality of life for patients with BPH.",
    image: IMG("Stage+2+BPH-1000h.jpg"),
    imageAlt: "Cross-section illustration of stage 2 benign prostatic hyperplasia",
  },
];
