// in src/customRoutes.js
import * as React from "react";
import { Route } from "react-router-dom";
import OAuth from "./oauth";
import Test from "./test";

export default [<Route exact path="/login/test" component={Test} />];
