import * as React from "react";
import { Admin, Resource } from "react-admin";
import {
  CategoryList,
  CategoryEdit,
  CategoryCreate,
} from "./sources/category/category";
import { ProductList, ProductEdit, ProductCreate } from "./sources/product/product";
import {
  SubProductList,
  SubProductEdit,
  SubProductCreate,
} from "./sources/subproduct/sub_product";
import {
  AttributeList,
  AttributeEdit,
  AttributeCreate,
} from "./sources/attribute/attribute";
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
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource
      name="sub_products"
      list={SubProductList}
      edit={SubProductEdit}
      create={SubProductCreate}
    />
    <Resource
      name="attributes"
      list={AttributeList}
      edit={AttributeEdit}
      create={AttributeCreate}
    />
  </Admin>
);

export default App;
