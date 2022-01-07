import * as React from "react";
import { Admin, Resource } from "react-admin";
// import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from "./posts";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import CustomLoginPage from "./CustomLoginPage";
import customRoutes from "./router";

import MyLoginPage from "./MyLoginPage";
import MyLogoutButton from "./MyLogoutButton";

import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    theme={theme}
    customRoutes={customRoutes}
    dashboard={Dashboard}
    logoutButton={MyLogoutButton}
    loginPage={MyLoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
