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
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Career from "./pages/Career";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLogin from "./admin/AdminLogin";
import ProtectedAdmin from "./admin/ProtectedAdmin";


function App() {

  const location = useLocation();

  const hideChatbot =
  location.pathname === "/admin-login" ||
  location.pathname === "/admin";

  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    });
  };

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      {/* Modern Cursor */}
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

     <div onMouseMove={handleMouseMove}>
        <Routes>
          

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Admin Login */}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <AdminDashboard />
              </ProtectedAdmin>
            }
          />

          {/* Career Page */}
          <Route path="/career" element={<Career />} />

          {/* Dynamic Career Apply Page */}
          <Route
            path="/career/:jobTitle/apply"
            element={<ApplyJob />}
          />
          

        </Routes>
      </div>
      <CookieConsent />
      <GoogleAnalytics />
      {!hideChatbot && <SkarvionChatbot />}
    </>
  );
}

export default App;