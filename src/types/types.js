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
  trabajadoresLogout:'[Emp] Limpiar Trabajadores',



  //examenes
  getExamenesTodosTrabajadoresEmpresa: "[Exam] Get Todos Examees Empresa",
  getExamsIdTrabajador:"[Exam] Get Todos Examenes Trabajador Segun ID",
  examenesLogout:'[Exam] Limpiar Examenes'
};
