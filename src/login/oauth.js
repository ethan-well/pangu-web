import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LoginOAuth } from "../submit";
import { useLogin, useNotify } from "react-admin";
import { usePermissions } from "react-admin";

export default function OAuth(props) {
  const { loading, permissions } = usePermissions();

  const search = useLocation().search;
  const history = useHistory();

  const login = useLogin();
  const notify = useNotify();

  const loginOAuthCallback = (resp) => {
    if (resp.succeed) {
      login(resp.result)
        .catch(() => {
          notify("login failed");
          history.push("/login");
        })
        .then(history.push("/"));
    } else {
      notify("login failed");
      history.push("/login");
    }
  };

  let loginOAuth = {
    provider: "github",
    code: new URLSearchParams(search).get("code"),
    service: process.env.REACT_APP_EUROPA_OAUTH_CLIENT_SERVICE,
  };

  useEffect(() => {
    LoginOAuth(loginOAuth, loginOAuthCallback);
  }, []);

  return loading ? (
    <React.Fragment>登录中...</React.Fragment>
  ) : (
    <React.Fragment> 登录成功，跳转中 </React.Fragment>
  );
}
