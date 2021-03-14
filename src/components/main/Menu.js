import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import {
  AirportShuttle,
  Edit,
  Home,
  PeopleAlt,
  PersonAdd,
  PostAdd,
} from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
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
export const Menu = () => {
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
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <Home fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Escritorio" />
          </ListItem>
        </Link>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>
            <i className="fas fa-hard-hat"></i> Usuarios
          </span>
        </h6>
        <Link className="nav-link" to="/admin/newuser">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <PersonAdd fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Nuevo Usuario" />
          </ListItem>
        </Link>
        <Link className="nav-link" to="/admin/edituser">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <Edit fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Editar Usuario" classes={classes.label} />
          </ListItem>
        </Link>
        <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>
            <i className="fas fa-hard-hat"></i> Empresas
          </span>
        </h5>
        <Link className="nav-link" to="/admin/newempresa">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <PostAdd fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Nueva Empresa" />
          </ListItem>
        </Link>
        <Link className="nav-link" to="/admin/editempresa">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <Edit fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Editar Empresa" />
          </ListItem>
        </Link>
        <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>
            <i className="fas fa-hard-hat"></i> Trabajadores
          </span>
        </h5>
        <Link className="nav-link" to="/admin/createemployee">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <PeopleAlt fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Nuevo Trabajador" />
          </ListItem>
        </Link>
        <Link className="nav-link" to="/admin/editemployee">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <Edit fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Editar Trabajador" />
          </ListItem>
        </Link>
        <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>
            <i className="fas fa-hard-hat"></i> Equipos
          </span>
        </h5>
        <Link className="nav-link" to="/admin/newequipment">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <AirportShuttle fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Nuevo Equipo" />
          </ListItem>
        </Link>
        <Link className="nav-link" to="/admin/editequipment">
          <ListItem button className={classes.root}>
            <ListItemIcon>
              <Edit fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Editar Equipo" />
          </ListItem>
        </Link>
      </List>
    </>
  )
}
