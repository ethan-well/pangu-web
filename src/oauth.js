import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LoginOAuth } from "./submit";

export default function OAuth(props) {
  const search = useLocation().search;
  const history = useHistory();

  const [result, setValues] = useState({
    provider: "",
    code: "",
  });

  const loginOAuthCallback = (resp) => {
    console.log("ddddddddddddddd");
    if (resp.succeed) {
      history.push("/");
    } else {
      history.push("/login");
    }
  };

  let loginOAuth = {
    provider: "github",
    code: new URLSearchParams(search).get("code"),
  };

  useEffect(() => {
    LoginOAuth(loginOAuth, loginOAuthCallback);
  });

  return <React.Fragment></React.Fragment>;
}

function Onload({ code }) {
  return (
    <div>{code ? <OnSucceed code={code} /> : <OnFailed code={code} />}</div>
  );
}

function OnSucceed({ code }) {
  return (
    <React.Fragment>
      <h3>登录成功 {code}</h3>
    </React.Fragment>
  );
}

function OnFailed() {
  return <React.Fragment>登录失败</React.Fragment>;
}
