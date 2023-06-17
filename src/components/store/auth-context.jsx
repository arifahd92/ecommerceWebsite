import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: "",
  loginHandler: (token) => {},
  logoutHandler: () => {},
});

export default AuthContext;
