import React from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { DropDown } from "../ui/drop-down/DropDown";
import { startCrearEquipoEmpresa } from "../../actions/equipos.actions";

export const CreateEquipmentScreen = () => {
    const { equipos } = useSelector(state => state.equi)
    const { empresas } = useSelector(state => state.empr);
    const dispatch = useDispatch();


    const [formValues, handleInputChange, reset] = useForm({
        idEmpresa: "",
        idEquipo: "",
        nombre: "",
    });

    const { idEquipo, nombre, idEmpresa } = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        const eqp = equipos.filter(equipo => equipo.id === idEquipo);
        if (eqp.length > 0) {
            Swal.fire("Ya existe este equipo", '', "error");
            reset();
        } else {
            dispatch(startCrearEquipoEmpresa(idEmpresa, idEquipo, nombre));
            Swal.fire("Equipo Creado con éxito", "", "success");
            reset();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Nuevo Eqiupo</h1>
                <hr />
                <select
                    id='idEmpresa'
                    name='idEmpresa'
                    className="form-select"
                    required
                    value={idEmpresa}
                    onChange={handleInputChange}

                >
                    <option defaultValue key='default' value='default' className='dropdown-item'>Selecciona una empresa</option>
                    {
                        empresas.map(empresa => <DropDown key={empresa.idEmpresa} {...empresa} />)
                    }
                </select>
                <input
                    type="text"
                    id="idEquipo"
                    name="idEquipo"
                    className="form-control"
                    placeholder="Ingrese patente o código del equipo"
                    required
                    autoFocus
                    onChange={handleInputChange}
                    value={idEquipo}
                />
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    placeholder="Nombre"
                    required
                    autoFocus
                    onChange={handleInputChange}
                    value={nombre}
                />
                <button
                    className="w-100 btn btn-lg btn-primary"
                    style={{ marginTop: "10px" }}
                    type="submit"
                >
                    Crear Eqiupo
        </button>
            </form>
        </div>
    );
};
