import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdmin({ children }) {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");

  if (isLoggedIn !== "true") {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default ProtectedAdmin;