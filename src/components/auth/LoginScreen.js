import React from "react";
import { useDispatch } from "react-redux";
import { startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./signin.css";

export const LoginScreen = () => {
  // const { loading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "jenny@morevaluecompany.com",
    password: "12341234",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
    // dispatch(startGetExamenesTodasLasEmpresas());
  };
  return (
    <div className="text-center">
      <main className="form-signin">
        <form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 fw-normal">Ingreso Empresas</h1>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Correo Electrónico"
            required
            autoFocus
            onChange={handleInputChange}
            value={email}
          />
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            required
            onChange={handleInputChange}
            value={password}
          />
          <div className="checkbox mb-3"></div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Ingresar
          </button>
        </form>
      </main>
    </div>
  );
};
