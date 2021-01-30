import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const startGetTodasLasEmpresas = () => {
  return async (dispatch) => {
    const empresas = [];
    db.collection("empresas")
      .get()
      .then((empresasRef) => {
        empresasRef.forEach((empresa) => {
          empresas.push({
            idEmpresa: empresa.id,
            ...empresa.data(),
          });
        });
        dispatch(getTodasLasEmpresas(empresas));
      });
  };
};

export const getTodasLasEmpresas = (empresas) => ({
  type: types.getTodasLasEmpresas,
  payload: empresas,
});

export const startCrearNuevaEmpresa = (idEmpresa, empresa) => {
  return async (dispatch) => {
    await db.collection("empresas").doc(idEmpresa).set(empresa);
    // dispatch(crearNuevaEmpresa(empresa));
    dispatch(startGetTodasLasEmpresas());
  };
};

export const startUpdateEmpresa = (empresa) => {
  const { idEmpresa } = empresa
  return async (dispatch) => {
    const docRef = await db.collection('empresas').doc(idEmpresa).get();
    if (docRef.exists) {
      dispatch(startCrearNuevaEmpresa(idEmpresa, empresa))
      // await db.collection('empresas').doc(idEmpresa).set({
      //   idEmpresa: idEmpresa,
      //   nombre: nombre,
      // })
      //   .then(console.log('Actualizado: ', idEmpresa))
      //   .catch(error => {
      //     console.log('Ocurrió un error: ', error);
      //   })
      // dispatch(updateEmpresa(idEmpresa, nombre))
      return true;
    } else {
      return false;
    }
  }
}

export const updateEmpresa = (idEmpresa, nombre) => ({
  types: types.updateEmpresa,
  payload: [idEmpresa, nombre]
})

//TODO: updateEmpresa

// export const crearNuevaEmpresa = (empresa) => ({
//   type: types.crearNuevaEmpresa,
//   payload: empresa,
// });
