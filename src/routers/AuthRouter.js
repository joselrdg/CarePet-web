import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { getUserInfo } from "../services/UserService";
import { getAccessToken } from "../stores/AccessTokenStore";

export const AuthRouter = () => {
  const [user, setUser] = useState(null);
  const getUser = () => {
    return getUserInfo().then((response) => setUser(response));
  };
  useEffect(() => {
    if (getAccessToken()) {
      getUser();
    }
  }, []);
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route
            exact
            path="/auth/login"
            render={() => <LoginScreen doLogin={getUser} />}
          />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  );
};
