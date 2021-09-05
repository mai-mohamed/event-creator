import React from "react";
import { useSelector } from "react-redux";
import AuthRoutes from "./AuthRoutes";
import SystemRoutes from "./SystemRoutes";

const Routes = () => {
  const isAuthenticated = useSelector((state) => state.auth?.auth);
  return isAuthenticated || localStorage.getItem("userData") ? (
    <SystemRoutes />
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
