import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import { usePermissions } from "react-admin";

const Foo = () => {
  console.log("Foo");
  const { loading, permissions } = usePermissions();

  return loading ? (
    <div>waiting for permissions</div>
  ) : (
    <Card>
      <Title title="My Page" />
      <CardContent>{permissions}</CardContent>
      {permissions == "guest" &&  <CardContent>guest</CardContent>}
      {permissions == "admin" &&  <CardContent>admin</CardContent>}
    </Card>
  );
};

export default Foo;
