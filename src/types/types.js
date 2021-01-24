export const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",

  //user types
  //obtiene los datos del usuario de la BD
  loadUserData: "[User] Load Logged User Data",
  //Quita el usuario del state
  userLogout: "[User] Logout",

  //Trabajadores
  getTrabajadoresIdEmpresa: "[Emp] Get Trabajadores ID Empresa",
  trabajadoresLogout: "[Emp] Limpiar Trabajadores",

  //examenes

  getExamenesPorVencerPorIdEmpresa: "[Exam] Get Examenes por Vencer ID Empresa",
  getExamenesPorVencer: "[Exam] Get Examenes por Vencer",

  crearNuevoExamen: "[Exam] Crear Nuevo Examen ID Trabajador",
  examenesLogout: "[Exam] Limpiar Examenes",

  //UI
  uiOpenModal: "[UI] Open Modal",
  uiCloseModal: "[UI] Close Modal",
};
