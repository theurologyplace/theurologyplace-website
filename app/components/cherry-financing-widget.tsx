"use client";

import { useEffect } from "react";

const CHERRY_FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@200..900&family=Slabo+27px:wght@200..900&family=Lato:wght@200..900&family=Raleway:wght@200..900&family=Montserrat:wght@200..900&family=Oswald:wght@200..900&family=Poppins:wght@200..900&family=Source+Sans+Pro:wght@200..900&family=PT+Sans:wght@200..900&family=Open+Sans:wght@200..900&display=swap";

const CHERRY_WIDGET_SRC = "https://files.withcherry.com/widgets/widget.js";

type CherryQueueFn = ((...args: unknown[]) => void) & { q?: IArguments[] };

declare global {
  interface Window {
    _hw?: CherryQueueFn;
    /** Cherry skips init for sections still listed here; clear on unmount for SPA navigation. */
    _hw_widgets?: string[];
    _hw_global_config?: unknown;
    _hw_floating_config?: unknown;
    _hw_shared_layout?: unknown;
  }
}

function ensureCherryFontsLink() {
  const href = CHERRY_FONT_HREF;
  if (document.querySelector(`link[data-cherry-fonts="1"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.setAttribute("data-cherry-fonts", "1");
  document.head.appendChild(link);
}

function loadCherryWidget() {
  const w = window;
  const d = document;
  const s = "script";
  const o = "_hw";
  const f = CHERRY_WIDGET_SRC;

  if (!w[o]) {
    w[o] = function () {
      (w[o]!.q = w[o]!.q || []).push(arguments);
    } as CherryQueueFn;
  }

  if (!d.getElementById(o)) {
    const js = d.createElement(s);
    const fjs = d.getElementsByTagName(s)[0];
    js.id = o;
    js.src = f;
    js.async = true;
    fjs?.parentNode?.insertBefore(js, fjs);
  }

  w[o]!("init", {
    debug: false,
    variables: {
      slug: "the-urology-place",
      name: "The Urology Place",
      images: "",
      customLogo: "",
      defaultPurchaseAmount: 825,
      customImage: "https://theurologyplace.com/images/branding/TheUrologyPlaceLogoIcon.png",
      imageCategory: "other",
      language: "en",
    },
    styles: {
      primaryColor: "#5a74a9",
      secondaryColor: "#605343",
      fontFamily: "Montserrat",
      headerFontFamily: "Montserrat",
    },
  }, ["hero", "calculator", "howitworks", "faq", "testimony"]);
}

/** Cherry keeps mount state on `window`; without this, returning via client navigation skips rendering. */
function resetCherryWidgetSession() {
  if (typeof window === "undefined") return;
  delete window._hw_widgets;
  delete window._hw_global_config;
  delete window._hw_floating_config;
  delete window._hw_shared_layout;
}

export function CherryFinancingWidget() {
  useEffect(() => {
    ensureCherryFontsLink();
    loadCherryWidget();

    return () => {
      resetCherryWidgetSession();
    };
  }, []);

  return (
    <div className="cherry-financing-embed w-full">
      <div id="all" />
      <div id="hero" />
      <div id="calculator" />
      <div id="howitworks" />
      <div id="testimony" />
      <div id="faq" />
    </div>
  );
}
