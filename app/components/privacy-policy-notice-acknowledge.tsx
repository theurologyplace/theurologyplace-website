"use client";

import { useEffect } from "react";
import { persistPrivacyNoticeAcknowledged } from "@/app/lib/privacy-notice-storage";

/** Sets persistent acknowledgement when the Privacy Policy HIPAA page is viewed (any entry path). */
export function PrivacyPolicyNoticeAcknowledge() {
  useEffect(() => {
    persistPrivacyNoticeAcknowledged();
  }, []);

  return null;
}
