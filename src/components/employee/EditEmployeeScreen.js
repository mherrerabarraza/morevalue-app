import React, { /*useEffect ,*/ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2'

import { CalendarModal } from '../ui/modal/CalendarModal'

import { uiOpenModal } from '../../actions/ui'
import { ExamenScreen } from '../ui/examenes/ExamenScreen'
import { startGetTodoExamenesTrabajadorID } from '../../actions/exam'
import {
  Button,
  CircularProgress,
  Container,
  FormGroup,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import { AddCircleOutlined } from '@material-ui/icons'
import { green } from '@material-ui/core/colors'
// import { startGetTrabajadoresIdEmpresa } from "../../actions/employee";

export const EditEmployeeScreen = () => {
  const dispatch = useDispatch()
  const { trabajadores } = useSelector((state) => state.trab)
  const { examenesTrabajador } = useSelector((state) => state.exam)
  const [exist, setExist] = useState(false)
  const [datosTrabajador, setDatosTrabajador] = useState([])
  const [formValues, handleInputChange, reset] = useForm({
    idTrabajador: '',
  })
  const { idTrabajador } = formValues

  /**
   * TODO: Ahora encuentra los examenes ONTHEFLY, pero necesito que
   * se muestren cuando se busca el trabajador
   */

  // useEffect(() => {
  //   // dispatch(startGetTodoExamenesTrabajadorID(idTrabajador));
  //   // dispatch(startGetTrabajadoresIdEmpresa(idEmpresa))
  // }, [idTrabajador, idEmpresa, dispatch])

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(startGetTodoExamenesTrabajadorID(idTrabajador))
    buscar(idTrabajador)
  }

  const buscar = (idTrabajador) => {
    const tra = trabajadores.filter((employee) => employee.id === idTrabajador)
    setDatosTrabajador(tra)
    if (tra.length > 0) {
      setExist(true)
    } else {
      Swal.fire('Trabajador No Encontrado', '', 'warning')
      //evita error de busqueda de no existente, después de encontrado
      setExist(false)
      reset()
    }
  }

  const handleModal = () => {
    dispatch(uiOpenModal())
  }
  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Editar Trabajador</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <Paper
            elevation={3}
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '20px',
              margin: '10px 0px',
            }}
          >
            <Typography variant="h5">Ingrese Rut</Typography>
            <form onSubmit={handleSearch}>
              <TextField
                type="text"
                id="idTrabajador"
                name="idTrabajador"
                className="form-control"
                placeholder="Ej: 12345678-9"
                required
                autoFocus
                onChange={handleInputChange}
                value={idTrabajador}
                variant="outlined"
                label="Rut Trabajador"
                style={{ width: 300, margin: '10px' }}
              />
              <br />
              <Button
                style={{ width: 300, margin: '10px' }}
                type="submit"
                color="primary"
                variant="contained"
              >
                Buscar Trabajador
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      {exist ? (
        <div>
          <Typography variant="h4">Datos del Trabajador</Typography>
          <Paper
            elevation={3}
            style={{
              display: 'flex',
              alignContent: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '20px',
              margin: '10px 0px',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {datosTrabajador ? (
                <div>
                  <TextField
                    id="nombre"
                    name="nombre"
                    type="text"
                    // value={nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre Empresa"
                    label={`${datosTrabajador[0].nombre} `}
                    required
                    variant="outlined"
                    // disabled={editable ? false : true}
                    disabled="true"
                    style={{ width: 300, margin: '10px' }}
                  />
                  <TextField
                    id="nombre"
                    name="nombre"
                    type="text"
                    // value={nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre Empresa"
                    label={`${datosTrabajador[0].idEmpresa} `}
                    required
                    variant="outlined"
                    // disabled={editable ? false : true}
                    disabled="true"
                    style={{ width: 300, margin: '10px' }}
                  />
                  <TextField
                    id="nombre"
                    name="nombre"
                    type="text"
                    // value={nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre Empresa"
                    label={`${datosTrabajador[0].idContrato} `}
                    required
                    variant="outlined"
                    // disabled={editable ? false : true}
                    disabled="true"
                    style={{ width: 300, margin: '10px' }}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </Paper>

          <div
            style={{
              display: 'flex',
            }}
          >
            <Typography variant="h4">Documentos del Trabajador</Typography>
            <AddCircleOutlined
              style={{
                fontSize: '2rem',
                color: green[800],
                cursor: 'pointer',
              }}
              onClick={handleModal}
            />
          </div>

          {examenesTrabajador ? (
            <ExamenScreen datosExamenes={examenesTrabajador} />
          ) : (
            <CircularProgress />
          )}
          <CalendarModal
            idTrabajador={idTrabajador}
            //debe ser el idEmpresa del Trabajador
            //no del user
            idEmpresa={datosTrabajador[0].idEmpresa}
            idContrato={datosTrabajador[0].idContrato}
          />
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  )
}
