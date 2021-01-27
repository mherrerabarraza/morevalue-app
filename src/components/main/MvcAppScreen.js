import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { useDispatch, useSelector } from "react-redux";

import "./dashboard.css";
import { DashBoardScreen } from "../ui/DashBoardScreen";
import { EditEmployeeScreen } from "../employee/EditEmployeeScreen";
import { startGetExamenesPorVencerPorIdEmpresa } from "../../actions/exam";
import { startGetTrabajadoresIdEmpresa } from "../../actions/employee";
import { CreateEmployeeScreen } from "../employee/CreateEmployeeScreen";

export const MvcAppScreen = () => {
  const dispatch = useDispatch();
  const { isAdmin, idEmpresa } = useSelector((state) => state.user);

  useEffect(() => {
    if (idEmpresa) {
      dispatch(startGetExamenesPorVencerPorIdEmpresa(idEmpresa));
      dispatch(startGetTrabajadoresIdEmpresa(idEmpresa));
    }
  }, [dispatch, idEmpresa]);
  //aqui deberia hacer el dispatch porque ya se que empresa es
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
                      Escritorio
                    </Link>
                  </li>
                  {isAdmin ? (
                    <>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Empresa</span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/newempresa">
                          Nueva Empresa
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/editempresa">
                          Editar Empresa
                        </Link>
                      </li>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Usuario</span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/newuser">
                          Nuevo Usuario
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/edituser">
                          Editar Usuario
                        </Link>
                      </li>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Trabajadores</span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/createemployee">
                          Nuevo Trabajador
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/editemployee">
                          Editar Trabajador
                        </Link>
                      </li>
                      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Equipos</span>
                      </h6>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/newequipment">
                          Nuevo Equipo
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin/editequipment">
                          Editar Equipo
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
                    component={CreateEmployeeScreen}
                    path="/admin/createemployee"
                  />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
};
