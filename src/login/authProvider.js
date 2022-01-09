import logout from "./logout";

const authProvider = {
  // called when the user attempts to log in
  login: (loginInfo) => {
    if (loginInfo == null || loginInfo.userInfo == null) {
      return Promise.reject();
    }

    const userInfo = loginInfo.userInfo;
    localStorage.setItem("name", userInfo.name);
    localStorage.setItem("roles", userInfo.roles);
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    const name = localStorage.getItem("name");
    logout(name) ? Promise.resolve() : Promise.reject();
  },
  getIdentity: () => {},
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("name");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    const name = localStorage.getItem("name");
    const roles = localStorage.getItem("roles");
    return name && roles ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    const name = localStorage.getItem("name");
    const roles = localStorage.getItem("roles");
    return name && roles ? Promise.resolve() : Promise.reject();
  },
};

export default authProvider;
