import { useState, useEffect } from "react";
import AuthContext from "./auth-context";

function AuthContextProvider(props) {
  const fetchedToken = localStorage.getItem("token");
  const [token, setToken] = useState(fetchedToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    //! Auto logout feature
    let loggedInTime = localStorage.getItem("expiresIn");
    let timeOutId = localStorage.getItem("timeOutId");

    if (timeOutId) {
      let loggedInAt = JSON.parse(loggedInTime);
      let currentTime = new Date().getTime();
      let diff = currentTime - +loggedInAt.createdAt;
      let expiringTimeInMs = +loggedInAt.expiresIn * 1000;

      if (diff > expiringTimeInMs) {
        console.log("cleared timeout");
        clearTimeout(timeOutId);
        logoutHandler();
      }

      if (diff < expiringTimeInMs) {
        localStorage.removeItem("timeOutId");
        let newTimeOutId = setTimeout(logoutHandler, expiringTimeInMs - diff);
        localStorage.setItem("timeOutId", newTimeOutId);
        console.log("new timeout set");
      }
    }
  }, []);

  function loginHandler(token, expiresIn) {
    setToken(token);
    setIsLoggedIn(!!token);
    localStorage.setItem("token", token);

    let timeOutId = setTimeout(logoutHandler, expiresIn * 1000);
    localStorage.setItem("timeOutId", timeOutId);
  }

  function logoutHandler() {
    console.log("called logout");
    setToken((prev) => null);
    setIsLoggedIn((prev) => false);

    let timeOutId = localStorage.getItem("timeOutId");
    clearTimeout(timeOutId);

    localStorage.removeItem("token");
    localStorage.removeItem("timeOutId");
    localStorage.removeItem("expiresIn");
  }

  const contextValue = {
    token,
    isLoggedIn,
    loginHandler,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
