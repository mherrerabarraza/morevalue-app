import React from 'react'
import { useSelector } from 'react-redux'
import { ExamenScreen } from '../ui/examenes/ExamenScreen'
import { PermisosScreen } from './permisos/PermisosScreen'
import { CircularProgress, Container } from '@material-ui/core'

export const DashBoardScreen = () => {
  const { examenes } = useSelector((state) => state.exam)
  const { permisos } = useSelector((state) => state.perm)

  return (
    <Container maxWidth="xl">
      <h1>Resumen:</h1>
      <h2>Documentos Por Vencer</h2>
      {examenes ? (
        <ExamenScreen datosExamenes={examenes} />
      ) : (
        <CircularProgress />
      )}
      {permisos ? (
        <PermisosScreen datosPermisos={permisos} />
      ) : (
        <CircularProgress color="secondary" />
      )}
    </Container>
  )
}
