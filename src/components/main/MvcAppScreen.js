import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './dashboard.css'
import {
  examenesLogout,
  getExamenesPorVencerPorIdEmpresa,
  startGetExamenesPorVencerPorIdEmpresa,
  startGetExamenesPorVencerTodasLasEmpresas,
} from '../../actions/exam'
import {
  startGetTodosTrabajadores,
  trabajadoresLogout,
} from '../../actions/employee'

import {
  empresasLogout,
  startGetTodasLasEmpresas,
} from '../../actions/empresa.actions'

import {
  equiposLogout,
  startGetTodosLosEquipos,
} from '../../actions/equipos.actions'
import {
  getPermisosPorVencerIdEmpresas,
  permisosLogout,
  startGetPermisosPorVencerIdEmpresas,
  startGetPermisosPorVencerTodasLasEmpresas,
} from '../../actions/permisos.actions'
import {
  contratosLogout,
  startGetContratosIdEmpresa,
  startGetTodosContratos,
} from '../../actions/contract'
import { Container, Grid } from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { ResponsiveDrawer } from '../ui/ResponsiveDrawer'
import { ResponsiveDrawerUser } from '../ui/ResponsiveDrawerUser'
import { startLogout } from '../../actions/auth'
import { userLogout } from '../../actions/user'

export const MvcAppScreen = () => {
  const [formValues, handleInputChange] = useForm({
    idContrato: '',
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

  // const handleLogout = () => {
  //   dispatch(startLogout())
  //   dispatch(userLogout())
  //   dispatch(trabajadoresLogout())
  //   dispatch(examenesLogout())
  //   dispatch(permisosLogout())
  //   dispatch(contratosLogout())
  //   dispatch(empresasLogout())
  //   dispatch(equiposLogout())
  // // }
  // console.log(idEmpresa)
  return (
    <div>
      <Router>
        {isAdmin ? <ResponsiveDrawer /> : <div></div>}
        {!isAdmin ? <ResponsiveDrawerUser /> : <div></div>}
        {/* <Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <Link className="nav-link" to="/"></Link>
            </Grid>
          </Grid>
        </Container> */}
      </Router>
    </div>
  )
}
