import * as React from "react";
import { Route } from "react-router-dom";
import OAuth from "./login/oauth";

export default [
  <Route exact path="/login/oauth" component={OAuth} noLayout />,
];
