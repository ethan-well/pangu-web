import * as React from "react";
import { Route } from "react-router-dom";
import Foo from "./Foo";
import OAuth from "./oauth";

export default [
  <Route exact path="/foo" component={Foo} noLayout />,
  <Route exact path="/login/oauth" component={OAuth} noLayout />,
];
