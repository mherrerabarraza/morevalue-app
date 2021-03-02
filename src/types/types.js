export const types = {
  login: "[Auth] Login",
  logout: "[Auth] Logout",

  //user types
  //obtiene los datos del usuario de la BD
  loadUserData: "[User] Load Logged User Data",
  //Quita el usuario del state
  userLogout: "[User] Logout",
  createUser: "[User] Created User",

  //Trabajadores
  getTrabajadoresIdEmpresa: "[Emp] Get Trabajadores ID Empresa",
  trabajadoresLogout: "[Emp] Limpiar Trabajadores",
  crearTrabajadorEmpresa: "[Emp] Trabajador Creado",
  trabajadorExist: "[Emp] Trabajador ya está en DB",
  getTodosTrabajadores: "[Emp] Get Todos Trabajadores Todas las Empresa",

  //examenes
  getExamenesPorVencerPorIdEmpresa: "[Exam] Get Examenes por Vencer ID Empresa",
  getExamenesPorVencerTodasLasEmpresas:
    "[Exam] Get Examenes por Vencer todas las Empresas",
  crearNuevoExamen: "[Exam] Crear Nuevo Examen ID Trabajador",
  getExamenUrl: "[Exam] Get Examen URL",
  removeExamenUrl: "[Exam] Remove Examen URL",
  examenesLogout: "[Exam] Limpiar Examenes",
  getTodoExamenesTrabajadorID: "[Exam] Examenes por idTrabajador",

  //UI
  uiOpenModal: "[UI] Open Modal",
  uiCloseModal: "[UI] Close Modal",

  //empresas
  crearNuevaEmpresa: "[EMP] Crear Nueva Empresa",
  getTodasLasEmpresas: "[EMP] Get Todas Las Empresa",

  //Equipos
  getEquiposIdEmpresa: "[Emp] Get Equipos ID Empresa",
  crearEquipoEmpresa: "[Emp] Equipo Creado",
  equiposLogout: "[Emp] Limpiar Equipos",
  equipoExist: "[Emp] Equipo ya está en DB",
  getTodosLosEquipos: "[Emp] Get todos los equipos",

  //Permisos
  getPermisosPorVencerIdEmpresas: "[PER] Permisos por vencer ID Empresa",
  getTodoPermisosEquipoID: "[PER] Get todos Permisos Equipo ID",
  getPermisosPorVencerTodasLasEmpresas:
    "[PER] Get todos Permisos por vencer todas las empresas",
  crearNuevoPermiso: "[PER] Crear Nuevo Permiso",

  //contratos
  crearNuevoContrato: "[CON] Nuevo Contrato",
  getContratosIdEmpresa: "[CON] Get Contrato ID Empresa",
  getTodosContratos: "[CON] Get Todos Contratos",
}
