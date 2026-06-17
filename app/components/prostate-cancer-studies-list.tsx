import { ClinicalStudiesList } from "@/app/components/clinical-studies-list";
import { PROSTATE_CANCER_STUDY_ELIGIBILITY } from "@/app/data/clinical-study-eligibility";
import { PROSTATE_CANCER_STUDIES } from "@/app/data/prostate-cancer-studies";

export function ProstateCancerStudiesList() {
  return (
    <ClinicalStudiesList
      studies={PROSTATE_CANCER_STUDIES}
      heading="Explore our prostate cancer studies"
      description="Filter by enrollment status to find studies that may be right for you. We value your participation in advancing prostate cancer care."
      filterAriaLabel="Filter prostate cancer studies by status"
      eligibility={PROSTATE_CANCER_STUDY_ELIGIBILITY}
    />
  );
}
