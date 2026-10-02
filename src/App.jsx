import { useState } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Loader from "./components/Loader";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SkarvionChatbot from "./components/SkarvionChatbot";
import CookieConsent from "./components/CookieConsent";
import HousePlans from "./pages/HousePlans";
import StructuralDesign from "./pages/StructuralDesign";

import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Career from "./pages/Career";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import HouseConstruction from "./pages/HouseConstruction";
import ConstructionCost from "./pages/ConstructionCost";

import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";
import ProtectedAdmin from "./admin/ProtectedAdmin";


function App() {
  const location = useLocation();

  const hideChatbot =
    location.pathname === "/admin-login" ||
    location.pathname === "/admin";

  const [loading, setLoading] = useState(true);

  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    });
  };

  if (loading) {
    return (
      <Loader
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <>
      {/* =========================
          MODERN CURSOR
      ========================= */}

      <div
        className="skv-cursor"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />

      <div
        className="skv-cursor-ring"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />

      {/* =========================
          APPLICATION CONTENT
      ========================= */}

      <div onMouseMove={handleMouseMove}>

        <Routes>

          {/* =========================
              HOME
          ========================= */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================
              SEO — HOUSE CONSTRUCTION
          ========================= */}

          <Route
            path="/house-construction"
            element={<HouseConstruction />}
          />


          {/* =========================
              SEO — CONSTRUCTION COST
          ========================= */}

          <Route
            path="/construction-cost"
            element={<ConstructionCost />}
          />


          {/* =========================
              ADMIN LOGIN
          ========================= */}

          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />


          {/* =========================
              PROTECTED ADMIN DASHBOARD
          ========================= */}

          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <AdminDashboard />
              </ProtectedAdmin>
            }
          />


          {/* =========================
              CAREER PAGE
          ========================= */}

          <Route
            path="/career"
            element={<Career />}
          />


          {/* =========================
              DYNAMIC CAREER APPLY PAGE
          ========================= */}

          <Route
            path="/career/:jobTitle/apply"
            element={<ApplyJob />}
          />


          {/* =========================
              PRIVACY POLICY
          ========================= */}

         <Route
          path="/policies"
          element={<PrivacyPolicy />}
          />

        {/* ============================
            HOUSE PLANS
            ============================ */}

          <Route
           path="/house-plans"
           element={<HousePlans />}
          />

          <Route
  path="/structural-design"
  element={<StructuralDesign />}
/>

        </Routes>

      </div>


      {/* =========================
          GLOBAL COMPONENTS
      ========================= */}

      <CookieConsent />

      <GoogleAnalytics />

      {!hideChatbot && (
        <SkarvionChatbot />
      )}

    </>
  );
}

export default App;