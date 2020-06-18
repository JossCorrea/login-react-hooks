//rotas que só estão acessíveis se o usuário estiver logado

import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const AuthRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/ordem-servico" component={Dashboard} />
      <Route exact path="/triagem" component={Dashboard} />
      <Route exact path="/entrega" component={Dashboard} />
    </>
  );
};

export default AuthRoutes;