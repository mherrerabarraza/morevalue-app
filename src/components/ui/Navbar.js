import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { trabajadoresLogout } from "../../actions/employee";
import { examenesLogout } from "../../actions/exam";
import { userLogout } from "../../actions/user";

export const Navbar = () => {
  //obtiene el nombre
  const { nombre } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(userLogout());
    dispatch(trabajadoresLogout());
    dispatch(examenesLogout());
  };

  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <div className="navbar-brand col-md-3 col-lg-2 me-0 px-3 nav-link">
          {nombre}
        </div>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
          </span>
        </button>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button className="btn nav-link" onClick={handleLogout}>
              Salir
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};
