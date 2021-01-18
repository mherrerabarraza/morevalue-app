// import Swal from "sweetalert2";

import { firebase, db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, ""));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

//TODO: descomponer funcion
export const startRegisterWithEmailPasswordName = (
  email,
  password,
  name,
  rol,
  empresa
) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        const userDatabase = {
          isAdmin: rol === "true" ? true : false,
          idEmpresa: empresa,
          nombre: name,
        };
        //autologin:  después de crear, no se necesita acá
        //dispatch(login(user.uid, user.displayName));
        /**
         * TODO: HACER DISPATCH QUE CREE EL USER EN LA BD
         */

        const doc = await db
          .collection("usuarios")
          .doc(user.uid)
          .set(userDatabase);
        console.log(doc);
      })
      .catch((e) => {
        console.log(e);
        // Swal.fire("Error", e.message, "error");
      });
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    //borra datos de auth en state
    dispatch(logout());
    //borra datos de user en state
  };
};

export const logout = () => ({
  type: types.logout,
});
