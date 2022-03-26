import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  CategoryList,
  CategoryEdit,
  CategoryCreate,
} from "./category/category";
import Dashboard from "./dashboard";
import authProvider from "./login/authProvider";
import dataProvider from "./dataProvider";
import LoginPage from "./login/loginPage";
import customRoutes from "./routes";
import { createBrowserHistory as createHistory } from "history";

import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#402B8C",
    },
    secondary: {
      main: "#7659B1",
    },
  },
});

const history = createHistory();

const App = () => (
  <Admin
    theme={theme}
    history={history}
    customRoutes={customRoutes}
    dashboard={Dashboard}
    loginPage={LoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
  </Admin>
);

export default App;
