import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Navbar } from "../ui/Navbar"
import { useDispatch, useSelector } from "react-redux"

import "./dashboard.css"
import { DashBoardScreen } from "../ui/DashBoardScreen"
import { EditEmployeeScreen } from "../employee/EditEmployeeScreen"
import {
  getExamenesPorVencerPorIdEmpresa,
  startGetExamenesPorVencerPorIdEmpresa,
  startGetExamenesPorVencerTodasLasEmpresas,
} from "../../actions/exam"
import { startGetTodosTrabajadores } from "../../actions/employee"
import { CreateEmployeeScreen } from "../employee/CreateEmployeeScreen"
import { CreateEmpresaScreen } from "../empresa/CreateEmpresaScreen"
import { startGetTodasLasEmpresas } from "../../actions/empresa.actions"
import { EditEmpresaScreen } from "../empresa/EditEmpresaScreen"
import { CreateEquipmentScreen } from "../equipment/CreateEquipmentScreen"
import { startGetTodosLosEquipos } from "../../actions/equipos.actions"
import {
  getPermisosPorVencerIdEmpresas,
  startGetPermisosPorVencerIdEmpresas,
  startGetPermisosPorVencerTodasLasEmpresas,
} from "../../actions/permisos.actions"
import { EditEquipmentScreen } from "../equipment/EditEquipmentScreen"
import {
  startGetContratosIdEmpresa,
  startGetTodosContratos,
} from "../../actions/contract"
import { NewUserScreen } from "../user/NewUserScreen"
import { Button, FormControl, Select } from "@material-ui/core"
import { useForm } from "../../hooks/useForm"

export const MvcAppScreen = () => {
  const [formValues, handleInputChange] = useForm({
    idContrato: "",
  })

  const { idContrato } = formValues
  //aqui deberia hacer el dispatch porque ya se que empresa es
  const { contratos } = useSelector((state) => state.cont)
  const dispatch = useDispatch()
  const { isAdmin, idEmpresa } = useSelector((state) => state.user)
  const { permisos } = useSelector((state) => state.perm)
  const { examenes } = useSelector((state) => state.exam)
  useEffect(() => {
    if (isAdmin && idEmpresa) {
      dispatch(startGetExamenesPorVencerTodasLasEmpresas())
      dispatch(startGetPermisosPorVencerTodasLasEmpresas())
      dispatch(startGetTodasLasEmpresas())
      dispatch(startGetTodosLosEquipos())
      dispatch(startGetTodosContratos())
      dispatch(startGetTodosTrabajadores())
    }
    if (!isAdmin && idEmpresa) {
      dispatch(startGetContratosIdEmpresa(idEmpresa))
      dispatch(startGetExamenesPorVencerPorIdEmpresa(idEmpresa))
      dispatch(startGetPermisosPorVencerIdEmpresas(idEmpresa))
    }
  }, [dispatch, idEmpresa, isAdmin])

  const handleDocumentosPorContrato = () => {
    //muestra los documentos de acuerdo al contrato seleccionado
    //por defecto muestra todos los documebtos de todos los contratos
    //este irá anexado al botón

    if (idContrato === "1") {
      dispatch(startGetExamenesPorVencerPorIdEmpresa(idEmpresa))
      dispatch(startGetPermisosPorVencerIdEmpresas(idEmpresa))
    } else {
      const filtroDocumentosPersonas = examenes.filter(
        (dpe) => dpe.idContrato === idContrato
      )
      const filtroDocumentosEquipos = permisos.filter(
        (deq) => deq.idContrato === idContrato
      )
      dispatch(getExamenesPorVencerPorIdEmpresa(filtroDocumentosPersonas))
      dispatch(getPermisosPorVencerIdEmpresas(filtroDocumentosEquipos))
    }

    /**
     * Pasar los datos al state para que pueda renderizar
     * los documentos en DashBoardScreen
     */
  }
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <span>
                        <i className="fas fa-home"></i> Escritorio
                      </span>
                      <br />
                      {!isAdmin ? (
                        <>
                          <FormControl variant="outlined">
                            <Select
                              style={{
                                marginTop: 10,
                              }}
                              value={idContrato}
                              onChange={handleInputChange}
                              native
                              label="Contrato"
                              required
                              inputProps={{
                                name: "idContrato",
                                id: "idContrato",
                              }}
                            >
                              <option key="default" defaultValue value="1">
                                Seleccione Contrato
                              </option>
                              {contratos ? (
                                contratos.map((contrato) => (
                                  <option
                                    key={contrato.id}
                                    id={contrato.id}
                                    value={contrato.idContrato}
                                  >
                                    {contrato.idContrato}
                                  </option>
                                ))
                              ) : (
                                <option key="nodata">
                                  No existen contratos
                                </option>
                              )}
                            </Select>
                          </FormControl>
                          <FormControl variant="outlined">
                            <Button
                              onClick={handleDocumentosPorContrato}
                              style={{
                                // width: 200,
                                marginBottom: 10,
                                marginTop: 10,
                              }}
                              type="submit"
                              color="primary"
                              variant="contained"
                            >
                              Ver Contrato
                            </Button>
                          </FormControl>
                        </>
                      ) : (
                        <div></div>
                      )}
                    </Link>
                  </li>
                  {isAdmin ? (
                    <>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>
                          <i className="fas fa-users"></i> Usuario
                        </span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/newuser">
                          <span>
                            <i className="fas fa-user-plus"></i>{" "}
                          </span>
                          Nuevo Usuario
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/edituser">
                          <span>
                            <i className="fas fa-user-edit"></i>{" "}
                          </span>
                          Buscar Usuario
                        </Link>
                      </li>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>
                          <i className="fas fa-laptop-house"></i> Empresa
                        </span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/newempresa">
                          <span>
                            <i className="fas fa-plus-circle"></i>{" "}
                          </span>
                          Nueva Empresa
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/editempresa">
                          <span>
                            <i className="fas fa-pen"></i>{" "}
                          </span>
                          Buscar Empresa
                        </Link>
                      </li>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>
                          <i className="fas fa-hard-hat"></i> Trabajadores
                        </span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/createemployee">
                          <span>
                            <i className="fas fa-plus-circle"></i>{" "}
                          </span>
                          Nuevo Trabajador
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/editemployee">
                          <span>
                            <i className="fas fa-pen"></i>{" "}
                          </span>
                          Buscar Trabajador
                        </Link>
                      </li>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>
                          <i className="fas fa-truck-pickup"></i> Equipos
                        </span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/newequipment">
                          <span>
                            <i className="fas fa-plus-circle"></i>{" "}
                          </span>
                          Nuevo Equipo
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/editequipment">
                          <span>
                            <i className="fas fa-pen"></i>{" "}
                          </span>
                          Buscar Equipo
                        </Link>
                      </li>
                    </>
                  ) : (
                    <div></div>
                  )}
                </ul>
              </div>
            </nav>
          </div>
          <div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <Switch>
                  <Route exact component={DashBoardScreen} path="/" />
                  <Route
                    exact
                    component={EditEmployeeScreen}
                    path="/admin/editemployee"
                  />
                  <Route
                    exact
                    component={NewUserScreen}
                    path="/admin/newuser"
                  />
                  {/* <Route
                    exact
                    component={editUserScreen}
                    path="/admin/newuser"
                  /> */}
                  <Route
                    exact
                    component={CreateEmployeeScreen}
                    path="/admin/createemployee"
                  />
                  <Route
                    exact
                    component={CreateEmpresaScreen}
                    path="/admin/newempresa"
                  />
                  <Route
                    exact
                    component={EditEmpresaScreen}
                    path="/admin/editempresa"
                  />
                  <Route
                    exact
                    component={CreateEmpresaScreen}
                    path="/admin/newempresa"
                  />
                  <Route
                    exact
                    component={CreateEquipmentScreen}
                    path="/admin/newequipment"
                  />
                  <Route
                    exact
                    component={EditEquipmentScreen}
                    path="/admin/editequipment"
                  />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </Router>
    </div>
  )
}
