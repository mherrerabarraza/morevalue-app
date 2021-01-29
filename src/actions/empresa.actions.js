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

export const startUpdateEmpresa = (idEmpresa, ...data) => {
  const { nombre } = data;
  return async (dispatch) => {
    const transac = db.collection('empresas').doc(idEmpresa);
    db.runTransaction.get(transac).then(sfDoc => {
      if (!sfDoc.exits) {
        throw 'No existe la empresa'
      }
      transac.update(transac, {
        nombre: nombre
      }).then(console.log('Actualizado')).catch(err => console.log('Falló ', err))
    })
  }
}

//TODO: updateEmpresa

// export const crearNuevaEmpresa = (empresa) => ({
//   type: types.crearNuevaEmpresa,
//   payload: empresa,
// });
