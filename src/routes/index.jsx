import React, { useContext } from "react";
import AuthContext from "../contexts/auth";
import PublicRoutes from "./public.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { signed } = useContext(AuthContext);
  
  return signed ? <AuthRoutes /> : <PublicRoutes />;
};

export default Routes;
