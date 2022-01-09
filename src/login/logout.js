import { PostData } from "../submit";
import Cookies from "js-cookie";

export default function logout(username) {
  console.log("username", username);

  let result = false;

  const LogoutCallback = (resp) => {
    console.log("resp", resp);
    result = resp.logout;
  };

  PostData(
    `${process.env.REACT_APP_EUROPA_LOGOUT}`,
    {},
    LogoutCallback
  );

  return result;
}
