import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { useDispatch, useSelector } from "react-redux";

import "./dashboard.css";
import { DashBoardScreen } from "../ui/DashBoardScreen";

export const MvcAppScreen  = () => {
  const { isAdmin } = useSelector((state) => state.user);
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
                        {console.log("isAdmin?")}
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
                    </>
                  ) : (
                    <div></div>
                  )}

                  <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Trabajadores</span>
                  </h6>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/newemployee">
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
                    <Link className="nav-link" to="/admin/edituser">
                      Editar Equipo
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <Switch>
                  {console.log("MvcAppScreen")}
                  <Route exact component={DashBoardScreen} path="/" />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
};
