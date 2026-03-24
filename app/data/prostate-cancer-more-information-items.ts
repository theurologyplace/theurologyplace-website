import type { MoreInformationItem } from "@/app/components/more-information-card-grid";

/** Encoded public URL base for robotic prostatectomy marketing images */
const IMG_BASE = "/images/robotic%20prostatectomy";

/**
 * Shared "More Information" cards for prostate cancer–related pages (e.g. Prostate Cancer hub,
 * Robotic Prostatectomy). Update links here once so both pages stay in sync.
 */
export const PROSTATE_CANCER_MORE_INFORMATION_ITEMS: MoreInformationItem[] = [
  {
    imageSrc: `${IMG_BASE}/image1.png`,
    imageAlt: "PSA, MRI and Gleason Score",
    label: "PSA, MRI and Gleason Score",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image2.png`,
    imageAlt: "Prostate Cancer Outcomes",
    label: "Prostate Cancer Outcomes",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image3.png`,
    imageAlt: "Airseal and Robotic Prostatectomy",
    label: "Airseal and Robotic Prostatectomy",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image4.png`,
    imageAlt: "Neuromonitoring with ProPep",
    label: "Neuromonitoring with ProPep",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image5.png`,
    imageAlt: "Patient Testimonial",
    label: "Patient Testimonial",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image6.png`,
    imageAlt: "GAINSWave for Sexual Function Recovery",
    label: "GAINSWave for Sexual Function Recovery",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image7.png`,
    imageAlt: "High Intensity Emsella Chair for Continence",
    label: "High Intensity Emsella Chair for Continence",
    href: "#",
  },
  {
    imageSrc: `${IMG_BASE}/image8.png`,
    imageAlt: "Dr. Kella's Thoughts on Choosing Your Prostate Cancer Surgeon",
    label: "Dr. Kella's Thoughts on Choosing Your Prostate Cancer Surgeon",
    href: "#",
  },
];
