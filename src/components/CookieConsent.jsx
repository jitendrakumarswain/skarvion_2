import { useEffect, useState } from "react";
import "../css-modular/CookieConsent.css";

const CONSENT_KEY = "skarvion_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (!savedConsent) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
  const openCookieSettings = () => {
    setShowSettings(true);
    setVisible(true);
  };

  window.addEventListener(
    "skarvion:open-cookie-settings",
    openCookieSettings
  );

  return () => {
    window.removeEventListener(
      "skarvion:open-cookie-settings",
      openCookieSettings
    );
  };
}, []);

  const saveConsent = (consent) => {
    const consentData = {
      ...consent,
      savedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify(consentData)
    );

    setVisible(false);

    // Later we will connect Google Analytics here.
    if (consent.analytics) {
      window.dispatchEvent(
        new CustomEvent("skarvion:analytics-consent")
      );
    }

    if (consent.marketing) {
      window.dispatchEvent(
        new CustomEvent("skarvion:marketing-consent")
      );
    }
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectOptional = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="skv-cookie-wrapper">
      <div className="skv-cookie-banner">

        <div className="skv-cookie-content">

          <div className="skv-cookie-icon">
            🍪
          </div>

          <div className="skv-cookie-text">
            <h3>We use cookies</h3>

            <p>
              Skarvion uses cookies to improve your browsing
              experience, understand website usage, and support
              relevant features. You can choose which optional
              cookies to allow.
            </p>

            <a
              href="/policies"
              className="skv-cookie-policy"
            >
              View Cookie Policy
            </a>
          </div>

        </div>

        {!showSettings ? (
          <div className="skv-cookie-actions">

            <button
              type="button"
              className="skv-cookie-btn skv-cookie-secondary"
              onClick={rejectOptional}
            >
              Reject Optional
            </button>

            <button
              type="button"
              className="skv-cookie-btn skv-cookie-outline"
              onClick={() => setShowSettings(true)}
            >
              Customize
            </button>

            <button
              type="button"
              className="skv-cookie-btn skv-cookie-primary"
              onClick={acceptAll}
            >
              Accept All
            </button>

          </div>
        ) : (
          <div className="skv-cookie-settings">

            <div className="skv-cookie-setting">
              <div>
                <strong>Necessary Cookies</strong>
                <span>
                  Required for basic website functionality.
                </span>
              </div>

              <label className="skv-cookie-switch">
                <input
                  type="checkbox"
                  checked
                  disabled
                />
                <span />
              </label>
            </div>

            <div className="skv-cookie-setting">
              <div>
                <strong>Analytics Cookies</strong>
                <span>
                  Help us understand how visitors use Skarvion.
                </span>
              </div>

              <label className="skv-cookie-switch">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      analytics: e.target.checked,
                    }))
                  }
                />
                <span />
              </label>
            </div>

            <div className="skv-cookie-setting">
              <div>
                <strong>Marketing Cookies</strong>
                <span>
                  Used for advertising and campaign measurement.
                </span>
              </div>

              <label className="skv-cookie-switch">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      marketing: e.target.checked,
                    }))
                  }
                />
                <span />
              </label>
            </div>

            <div className="skv-cookie-settings-actions">
              <button
                type="button"
                className="skv-cookie-btn skv-cookie-secondary"
                onClick={() => setShowSettings(false)}
              >
                Back
              </button>

              <button
                type="button"
                className="skv-cookie-btn skv-cookie-primary"
                onClick={savePreferences}
              >
                Save Preferences
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}