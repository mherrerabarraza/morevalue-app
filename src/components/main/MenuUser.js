import {
  Button,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Select,
} from '@material-ui/core'
import { Home } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGetContratosIdEmpresa } from '../../actions/contract'
import {
  getExamenesPorVencerPorIdEmpresa,
  startGetExamenesPorVencerPorIdEmpresa,
} from '../../actions/exam'
import {
  getPermisosPorVencerIdEmpresas,
  startGetPermisosPorVencerIdEmpresas,
} from '../../actions/permisos.actions'
import { useForm } from '../../hooks/useForm'
export const MenuUser = () => {
  const dispatch = useDispatch()
  const { contratos } = useSelector((state) => state.cont)
  const { isAdmin, idEmpresa } = useSelector((state) => state.user)
  const { permisos } = useSelector((state) => state.perm)
  const { examenes } = useSelector((state) => state.exam)
  const [formValues, handleInputChange] = useForm({
    idContrato: '',
  })

  useEffect(() => {
    if (!isAdmin && idEmpresa) {
      dispatch(startGetContratosIdEmpresa(idEmpresa))
      dispatch(startGetExamenesPorVencerPorIdEmpresa(idEmpresa))
      dispatch(startGetPermisosPorVencerIdEmpresas(idEmpresa))
    }
  }, [dispatch, idEmpresa, isAdmin])

  const { idContrato } = formValues
  const handleDocumentosPorContrato = () => {
    //muestra los documentos de acuerdo al contrato seleccionado
    //por defecto muestra todos los documebtos de todos los contratos
    //este irá anexado al botón

    if (idContrato === '1') {
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
  const useStyles = makeStyles({
    root: {
      height: 48,
      // padding: '0 30px',

      color: 'black',
      '&:hover': {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
    label: {
      textTransform: 'capitalize',
    },
    itemText: {
      color: 'red',
    },
    logo: {
      width: '100%',
      height: 'auto',
    },
  })
  const classes = useStyles()
  return (
    <>
      {/* 
    TODO2: PROGRAMAR CUANDO NO ES ADMIN
    EN EL CASO DE QUE NO SEA ADMIN DE TODAS MANERAS DEBE TENER
    EL DESPLEGABLE PARA MOSTRAR LOS CONTRATOS DE LA EMPRESA LOGUEADA
    */}
      <List component="nav">
        <div className={classes.paper}>
          <div>
            <img
              className={classes.logo}
              src="../../assets/mvlogo.svg"
              alt="More Value"
            ></img>
          </div>
        </div>
        <Link className="nav-link" to="/">
          <ListItem
            button
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
              // label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          >
            <ListItemIcon>
              <Home fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Escritorio" />
          </ListItem>
        </Link>
        <div className="nav-link">
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
                name: 'idContrato',
                id: 'idContrato',
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
                <option key="nodata">No existen contratos</option>
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
        </div>
      </List>
    </>
  )
}
