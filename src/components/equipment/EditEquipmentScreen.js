import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { startGetTodoPermisosEquipoID } from '../../actions/permisos.actions';
import { useForm } from '../../hooks/useForm';
import { PermisosScreen } from '../ui/permisos/PermisosScreen';
import { uiOpenModal } from '../../actions/ui'
import { PermisosModal } from '../ui/modal/PermisosModal';

export const EditEquipmentScreen = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({
        idEquipo: "",
    });
    const { idEquipo } = formValues;


    useEffect(() => {
        dispatch(startGetTodoPermisosEquipoID(idEquipo));
    }, [dispatch, idEquipo]);

    const [exist, setExist] = useState(false);
    const [datosEquipo, setDatosEquipo] = useState([]);
    const [datosPermisos, setDatosPermisos] = useState([]);
    const { equipos } = useSelector((state) => state.equi);
    const { permisos } = useSelector((state) => state.perm);
    const { idEmpresa } = useSelector((state) => state.user);

    const handleSearch = (e) => {
        e.preventDefault();
        buscar(idEquipo);
    };
    const buscar = (idEquipo) => {
        const equ = equipos.filter((equipo) => equipo.id === idEquipo);
        setDatosEquipo(equ);
        const per = permisos.filter(
            (permiso) => permiso.idEquipo === idEquipo
        );
        setDatosPermisos(per);

        if (equ.length > 0) {
            // setDatosTrabajador(tra);
            // setDatosExamenes(ex);
            setExist(true);
        } else {
            Swal.fire("Equipo No Encontrado", "", "warning");
            //evita error de busqueda de no existente, después de encontrado
            setExist(false)
            reset();
        }
    };
    const handleModal = () => {
        dispatch(uiOpenModal());
    };
    return (
        <div>
            <form onSubmit={handleSearch}>
                <h1 className="h3 mb-3 fw-normal">Buscar Eqiupo</h1>
                <hr />
                <input
                    type="text"
                    id="idEquipo"
                    name="idEquipo"
                    className="form-control"
                    placeholder="Ingrese patente, ej: AABB11"
                    required
                    autoFocus
                    onChange={handleInputChange}
                    value={idEquipo}
                />
                <button
                    className="w-100 btn btn-lg btn-primary"
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    type="submit"
                >
                    Buscar
        </button>
            </form>

            {exist ? (
                <div>
                    <h3>Datos del Equipo</h3>
                    <div className="datosTrabajador">
                        {datosEquipo ? (
                            <div>Nombre: {datosEquipo[0].nombre}</div>
                        ) : (
                                <div></div>
                            )}
                    </div>
                    <div>
                        <h3>
                            Documentos{" "}
                            <span style={{ color: "green", cursor: "pointer" }}>
                                <i className="fas fa-plus-circle" onClick={handleModal}>
                                    {" "}
                                </i>
                            </span>
                        </h3>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Rut Empresa</th>
                                <th scope="col">ID o Patente Equipo</th>
                                <th scope="col">Fecha Caducidad</th>
                                <th scope="col">Nombre Documento</th>
                                <th scope="col">Descargar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosPermisos ? (
                                datosPermisos.map((permiso) => (
                                    <PermisosScreen key={permiso.id} {...permiso} />
                                ))
                            ) : (
                                    <>Loading...</>
                                )}
                        </tbody>
                    </table>
                    <PermisosModal idEquipo={idEquipo} idEmpresa={idEmpresa} />
                </div>
            ) : (
                    <div></div>
                )}
        </div>
    );
}
