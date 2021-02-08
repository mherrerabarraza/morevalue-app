import { db } from "../firebase/firebase-config";
import { types } from "../types/types";


export const startGetPermisosPorVencerIdEmpresas = (idEmpresa) => {
  var someDate = new Date();
  var numberOfDaysToAdd = 90;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  const newDate = someDate.getTime();
  const permisos = [];
  return async (dispatch) => {
    await db
      .collection("permisos")
      .where("idEmpresa", "==", idEmpresa)
      //Calcular fecha a 60 días (se creo un filtro en firestore tambien)
      .where("fechaCaducidad", "<=", newDate)
      .get()
      .then((snap) => {
        snap.forEach((permiso) =>
        permisos.push({
            id: permiso.id,
            ...permiso.data(),
          })
        );
      });
    dispatch(getPermisosPorVencerIdEmpresas(permisos));
  };
};

export const getPermisosPorVencerIdEmpresas = (examenes) => ({
  type: types.getPermisosPorVencerIdEmpresas,
  payload: examenes,
});


export const startGetPermisosPorVencerTodasLasEmpresas = () => {
    var someDate = new Date();
    var numberOfDaysToAdd = 90;
    someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    const newDate = someDate.getTime();
    const permisos = [];
    return async (dispatch) => {
      await db
        .collection("permisos")
        .where("fechaCaducidad", "<=", newDate)
        .get()
        .then((snap) => {
          snap.forEach((permiso) => {
            permisos.push({
              id: permiso.id,
              ...permiso.data(),
            })
          }
          );
        });
      dispatch(getPermisosPorVencerTodasLasEmpresas(permisos));
    };
  }
  
  export const getPermisosPorVencerTodasLasEmpresas = (permisos) => ({
    type: types.getPermisosPorVencerTodasLasEmpresas,
    payload: permisos,
  });

  export const startGetTodoPermisosEquipoID = (idEquipo) => {
    const permisos = [];
    return async (dispatch) => {
      await db
        .collection("permisos")
        .where("idEquipo", "==", idEquipo)
        .get()
        .then((snap) => {
          snap.forEach((permiso) => {
            permisos.push({
              id: permiso.id,
              ...permiso.data(),
            })
          }
          );
        });
      dispatch(getTodoPermisosEquipoID(permisos));
    };
   }
  
  export const getTodoPermisosEquipoID = (permisos) =>({
    type: types.getTodoPermisosEquipoID,
    payload: permisos,
  })

  export const startCrearNuevoPermiso = (permiso) => {
    return async (dispatch) => {
      const permisoRef = db.collection("permisos");
      //agredar Datos
      permisoRef
        .add(permiso)
        .then((permiso) => {
          console.log("Agregado: ", permiso.id);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      dispatch(crearNuevoExamen(permiso));
    };
  };
  
  export const crearNuevoExamen = (permiso) => ({
    type: types.crearNuevoPermiso,
    payload: permiso,
  });