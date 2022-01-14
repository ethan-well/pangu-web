import { PostData } from "../submit";

export default function logout(callback) {
  let result = false;

  const LogoutCallback = (resp) => {
    result = resp.succeed;
    callback(result);
  };

  PostData(`${process.env.REACT_APP_EUROPA_LOGOUT}`, {}, LogoutCallback);

  return result;
}
