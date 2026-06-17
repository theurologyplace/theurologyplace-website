import type { ClinicalStudy } from "@/app/data/clinical-study-shared";

const IMG = (filename: string) =>
  encodeURI(`/images/kidney stones/${filename}`);

export const RENAL_STUDIES: ClinicalStudy[] = [
  {
    name: "Verve",
    status: "Active and Enrolling",
    description:
      "The Verve study is evaluating emerging therapies and management strategies for renal disease. Researchers hope these approaches will improve patient outcomes and provide additional options for individuals affected by kidney-related conditions.",
    nct: "NCT07005050",
    image: IMG("photo-1512615199361-5c7a110a8d11-2880w.jpg"),
    imageAlt: "Medical illustration representing renal disease clinical research",
  },
];
