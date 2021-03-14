import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { login } from '../actions/auth'
import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from '../routers/PrivateRoute'
import { PublicRoute } from '../routers/PublicRoute'
import { MvcAppScreen } from '../components/main/MvcAppScreen'
import { startLoadUserData } from '../actions/user'

export const AppRouter = () => {
  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //Mantiene el estado "state" de redux respecto a los cambios
  //que se generan al reacargar la página
  //está escuchando si se logueo o cambia el login del usuario
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(startLoadUserData(user.uid))
        dispatch(login(user.uid))
        //cargar el usuario que se acaba de autenticar
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return <h1>Cargando...</h1>
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggedIn}
            path="/auth"
            component={AuthRouter}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/"
            // component={MvcAppNew}
            component={MvcAppScreen}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
