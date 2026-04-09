"use client";

import { CONTACT_RECAPTCHA_ACTION } from "@/app/lib/contact-recaptcha-constants";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const loadPromises = new Map<string, Promise<void>>();

function loadRecaptchaV3(siteKey: string): Promise<void> {
  const key = siteKey.trim();
  let p = loadPromises.get(key);
  if (p) return p;

  p = new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("reCAPTCHA can only run in the browser"));
      return;
    }

    const onReady = () => {
      window.grecaptcha?.ready(() => resolve());
    };

    if (window.grecaptcha) {
      onReady();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(key)}`;
    script.async = true;
    script.defer = true;
    script.onload = onReady;
    script.onerror = () => reject(new Error("Could not load reCAPTCHA"));
    document.head.appendChild(script);
  });

  loadPromises.set(key, p);
  return p;
}

/** Runs invisible reCAPTCHA v3 and returns a one-time token for `/api/contact`. */
export async function executeRecaptchaV3Token(siteKey: string): Promise<string> {
  const key = siteKey.trim();
  if (!key) {
    throw new Error("reCAPTCHA site key is not configured");
  }
  await loadRecaptchaV3(key);
  if (!window.grecaptcha) {
    throw new Error("reCAPTCHA is not available");
  }
  return window.grecaptcha.execute(key, { action: CONTACT_RECAPTCHA_ACTION });
}
