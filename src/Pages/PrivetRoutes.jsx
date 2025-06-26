import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/CreateContex";
import Loading from "../Component/Loading";
const PrivetRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRoutes;
