// import Swal from "sweetalert2";

import { db } from "../firebase/firebase-config"
import { types } from "../types/types"

export const startLoadUserData = (uid) => {
  return async (dispatch) => {
    const docRef = db.collection("usuarios").doc(uid)
    await docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          // console.log(doc.data());
          const user = {
            ...doc.data(),
          }
          dispatch(loadUserData(user))
        } else {
          console.log("no existe")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
//carga los datos del usuario en el store
export const loadUserData = (user) => ({
  type: types.loadUserData,
  payload: user,
})
//limpia el store
export const userLogout = () => ({
  type: types.userLogout,
  payload: null,
})
