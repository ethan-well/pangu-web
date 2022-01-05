import * as React from "react";
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import CustomLoginPage from './CustomLoginPage';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dashboard={Dashboard} loginPage={CustomLoginPage} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;