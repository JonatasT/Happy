import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import HospitalsMap from "./pages/HospitalsMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={HospitalsMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
