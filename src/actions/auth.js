// import Swal from "sweetalert2";

import { firebase, db } from "../firebase/firebase-config"
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, ""))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
})

//TODO: descomponer funcion
export const startRegisterWithEmailPasswordName = (user) => {
  const { idEmpresa, idUsuario, isAdmin, nombre, email, password } = user
  const currentUser = firebase.auth().currentUser
  console.log(currentUser)
  return async (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: nombre }).then()

        const userDatabase = {
          idEmpresa: idEmpresa,
          idUsuario: idUsuario,
          isAdmin: isAdmin === "true" ? true : false,
          nombre: nombre,
        }
        //autologin:  después de crear, no se necesita acá
        // dispatch(login(currentUser.uid, currentUser.displayName))
        /**
         * TODO: HACER DISPATCH QUE CREE EL USER EN LA BD
         */

        await db.collection("usuarios").doc(user.uid).set(userDatabase)
      })
      .catch((e) => {
        console.log(e)
        // Swal.fire("Error", e.message, "error");
      })
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    //borra datos de auth en state
    dispatch(logout())
    //borra datos de user en state
  }
}

export const logout = () => ({
  type: types.logout,
  payload: null,
})
