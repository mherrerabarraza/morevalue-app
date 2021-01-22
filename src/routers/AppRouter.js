import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import { firebase } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "../routers/PrivateRoute";
import { PublicRoute } from "../routers/PublicRoute";
import { MvcAppScreen } from "../components/main/MvcAppScreen";
import { startLoadUserData } from "../actions/user";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { idEmpresa } = useSelector((state) => state.user);

  //Mantiene el estado "state" de redux respecto a los cambios
  //que se generan al reacargar la página
  //está escuchando si se logueo o cambia el login del usuario
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid));
        //cargar el usuario que se acaba de autenticar
        dispatch(startLoadUserData(user.uid));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Cargando...</h1>;
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            component={MvcAppScreen}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
