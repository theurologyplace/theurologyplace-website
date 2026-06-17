import type { ClinicalStudy } from "@/app/data/clinical-study-shared";

const IMG = (filename: string) => encodeURI(`/images/bladder cancer/${filename}`);

export const BLADDER_CANCER_STUDIES: ClinicalStudy[] = [
  {
    name: "rBCG",
    status: "Active and Enrolling",
    description:
      "The rBCG study is investigating recombinant Bacillus Calmette-Guérin (rBCG) as a treatment option for patients with non-muscle invasive bladder cancer. Researchers aim to evaluate whether this next-generation therapy can provide effective disease control while maintaining a favorable safety profile.",
    image: IMG("pexels-photo-3900424-2880w.jpeg"),
    imageAlt: "Medical setting representing bladder cancer treatment research",
  },
  {
    name: "AURA",
    status: "Active and Enrolling",
    description:
      "The AURA study is evaluating innovative therapies for bladder cancer and aims to improve treatment outcomes through advanced approaches to disease management. Researchers are studying the safety and effectiveness of these therapies in eligible patients.",
    nct: "NCT03674424",
    image: IMG("Blog_Post-Bladder_Cancer.webp"),
    imageAlt: "Illustration representing bladder cancer clinical research",
  },
  {
    name: "Cxbladder microDRIVE",
    status: "Active and Enrolling",
    description:
      "The Cxbladder microDRIVE study is evaluating a noninvasive urine-based biomarker test designed to improve the detection and evaluation of bladder cancer. Researchers hope this technology will help reduce unnecessary procedures while supporting earlier diagnosis and more personalized care.",
    nct: "NCT05889195",
    image: IMG("pexels-photo-6129116-2880w.jpeg"),
    imageAlt: "Laboratory research representing bladder cancer biomarker testing",
  },
];
