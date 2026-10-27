
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
import Courses from "./pages/Courses";
import AutoCADCourse from "./pages/AutoCADCourse";
import RevitTraining from "./pages/RevitTraining";
import ETABSStaadCourse from "./pages/ETABSStaadCourse";
import ModernElevation from "./pages/ModernElevation";
import ArchitecturalPlanning from "./pages/ArchitecturalPlanning";
import FloorPlanDesigns from "./pages/FloorPlanDesigns";
import HousePlanning from "./pages/HousePlanning";
import SitePlanning from "./pages/SitePlanning";
import ThreeDElevation from "./pages/ThreeDElevation";
import FrontElevation from "./pages/FrontElevation";
import ExteriorDesign from "./pages/ExteriorDesign";
import LandscapeDesign from "./pages/LandscapeDesign";
import LivingRoomDesign from "./pages/LivingRoomDesign";
import BedroomDesign from "./pages/BedroomDesign";
import KitchenDesign from "./pages/KitchenDesign";
import BathroomDesign from "./pages/BathroomDesign";
import OfficeDesign from "./pages/OfficeDesign";
import StaircaseDesign from "./pages/StaircaseDesign";
import FalseCeilingDesign from "./pages/FalseCeilingDesign";
import WallDecorDesign from "./pages/WallDecorDesign";
import LightingDesign from "./pages/LightingDesign";
import ModularDesign from "./pages/ModularDesign";
import BalconyDesign from "./pages/BalconyDesign";
import GardenDesign from "./pages/GardenDesign";
import SwimmingPoolDesign from "./pages/SwimmingPoolDesign";
import SpacePlanning from "./pages/SpacePlanning";


function App() {
  const location = useLocation();

  const hideChatbot =

  location.pathname === "/admin-login" ||
  location.pathname === "/admin" ||
  location.pathname === "/courses" ||
  location.pathname === "/courses/autocad-civil-3d"||
  location.pathname === "/courses/revit-training" ||
  location.pathname === "/courses/etabs-staad-pro";



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

          {/* ============================
              STRUCTURAL DESIGN
          ============================ */}

          <Route
            path="/structural-design"
            element={<StructuralDesign />}
          />

          {/* ============================
              SKARVION ACADEMY — COURSES
          ============================ */}

          <Route
            path="/courses"
            element={<Courses />}
          />

          {/* ============================
              SKARVION ACADEMY — AUTOCAD & CIVIL 3D COURSE
          ============================ */}
           <Route
          path="/courses/autocad-civil-3d"
          element={<AutoCADCourse />}
        />

          {/* ============================
              SKARVION ACADEMY — REVIT & BIM TRAINING
          ============================ */}
          <Route
            path="/courses/revit-training"
            element={<RevitTraining />}
          />

          {/* ============================
              SKARVION ACADEMY — ETABS & STAAD.PRO TRAINING
          ============================ */}
          <Route
            path="/courses/etabs-staad-pro"
            element={<ETABSStaadCourse />}
          />

          {/* ============================
              SKARVION ACADEMY — MODERN ELEVATION
          ============================ */}
          <Route
  path="/modern-elevation"
  element={<ModernElevation />}
/>

          {/* ============================
              SKARVION ACADEMY — ARCHITECTURAL PLANNING
          ============================ */}
          <Route
  path="/architectural-planning"
  element={<ArchitecturalPlanning />}
/>

          {/* ============================
              SKARVION ACADEMY — FLOOR PLAN DESIGNS
          ============================ */}
          <Route
  path="/floor-plan-designs"
  element={<FloorPlanDesigns />}
/>

          {/* ============================
              SKARVION ACADEMY — HOUSE PLANNING
          ============================ */}
          <Route
  path="/house-planning"
  element={<HousePlanning />}
/>

          {/* ============================
              SKARVION ACADEMY — SITE PLANNING
          ============================ */}
          <Route
  path="/site-planning"
  element={<SitePlanning />}
/>

          {/* ============================
              SKARVION ACADEMY — 3D ELEVATION
          ============================ */}
          <Route
  path="/3d-elevation"
  element={<ThreeDElevation />}
/>

          {/* ============================
              SKARVION ACADEMY — FRONT ELEVATION
          ============================ */}
          <Route
  path="/front-elevation"
  element={<FrontElevation />}
/>

          {/* ============================
              SKARVION ACADEMY — EXTERIOR DESIGN
          ============================ */}
          <Route
  path="/exterior-design"
  element={<ExteriorDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — LANDSCAPE DESIGN
          ============================ */}
          <Route
  path="/landscape-design"
  element={<LandscapeDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — LIVING ROOM DESIGN
          ============================ */}
          <Route
  path="/living-room-design"
  element={<LivingRoomDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — BEDROOM DESIGN
          ============================ */}
          <Route
  path="/bedroom-design"
  element={<BedroomDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — KITCHEN DESIGN
          ============================ */}
          <Route
  path="/kitchen-design"
  element={<KitchenDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — BATHROOM DESIGN
          ============================ */}
          <Route
  path="/bathroom-design"
  element={<BathroomDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — OFFICE DESIGN
          ============================ */}
          <Route
  path="/office-design"
  element={<OfficeDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — STAIRCASE DESIGN
          ============================ */}
          <Route
  path="/staircase-design"
  element={<StaircaseDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — FALSE CEILING DESIGN
          ============================ */}
          <Route
  path="/false-ceiling-design"
  element={<FalseCeilingDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — WALL DECOR DESIGN
          ============================ */}
          <Route
  path="/wall-decor-design"
  element={<WallDecorDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — LIGHTING DESIGN
          ============================ */}
          <Route
  path="/lighting-design"
  element={<LightingDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — MODULAR DESIGN
          ============================ */}
          <Route
  path="/modular-design"
  element={<ModularDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — BALCONY DESIGN
          ============================ */}
          <Route
  path="/balcony-design"
  element={<BalconyDesign />}
/>
          {/* ============================
              SKARVION ACADEMY — GARDEN DESIGN
          ============================ */}
          <Route
  path="/garden-design"
  element={<GardenDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — SWIMMING POOL DESIGN
          ============================ */}
          <Route
  path="/swimming-pool-design"
  element={<SwimmingPoolDesign />}
/>

          {/* ============================
              SKARVION ACADEMY — SPACE PLANNING
          ============================ */}
          <Route
  path="/space-planning"
  element={<SpacePlanning />}
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
