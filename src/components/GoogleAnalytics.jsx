import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-01NTTX44LB";

function getStoredConsent() {
  try {
    const raw = localStorage.getItem("skarvion_cookie_consent");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function loadGoogleAnalytics() {
  if (window.__skarvionGoogleAnalyticsLoaded) {
    return;
  }

  window.__skarvionGoogleAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];

  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

  script.onload = () => {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    window.gtag("config", GA_MEASUREMENT_ID);
  };

  script.onerror = () => {
    window.__skarvionGoogleAnalyticsLoaded = false;
    console.error("Skarvion: Google Analytics failed to load.");
  };

  document.head.appendChild(script);
}

export default function GoogleAnalytics() {
  useEffect(() => {
    const consent = getStoredConsent();

    if (consent?.analytics === true) {
      loadGoogleAnalytics();
    }

    const handleAnalyticsConsent = () => {
      loadGoogleAnalytics();
    };

    window.addEventListener(
      "skarvion:analytics-consent",
      handleAnalyticsConsent
    );

    return () => {
      window.removeEventListener(
        "skarvion:analytics-consent",
        handleAnalyticsConsent
      );
    };
  }, []);

  return null;
}