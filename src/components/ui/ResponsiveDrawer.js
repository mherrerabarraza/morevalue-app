import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Menu } from '../main/Menu'
import { Route, Switch } from 'react-router'
import { DashBoardScreen } from './DashBoardScreen'
import { EditEmployeeScreen } from '../employee/EditEmployeeScreen'
import { NewUserScreen } from '../user/NewUserScreen'
import { CreateEmployeeScreen } from '../employee/CreateEmployeeScreen'
import { CreateEmpresaScreen } from '../empresa/CreateEmpresaScreen'
import { EditEmpresaScreen } from '../empresa/EditEmpresaScreen'
import { CreateEquipmentScreen } from '../equipment/CreateEquipmentScreen'
import { EditEquipmentScreen } from '../equipment/EditEquipmentScreen'
import { ExitToApp } from '@material-ui/icons'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { contratosLogout } from '../../actions/contract'
import { trabajadoresLogout } from '../../actions/employee'
import { empresasLogout } from '../../actions/empresa.actions'
import { equiposLogout } from '../../actions/equipos.actions'
import { examenesLogout } from '../../actions/exam'
import { permisosLogout } from '../../actions/permisos.actions'
import { userLogout } from '../../actions/user'

const drawerWidth = 280

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  exitButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: '10px',
  },
}))
export const ResponsiveDrawer = (props) => {
  const { nombre } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleLogout = () => {
    dispatch(startLogout())
    dispatch(userLogout())
    dispatch(trabajadoresLogout())
    dispatch(examenesLogout())
    dispatch(permisosLogout())
    dispatch(contratosLogout())
    dispatch(empresasLogout())
    dispatch(equiposLogout())
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Menu />
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{nombre}</Typography>
          <Button
            className={classes.exitButton}
            variant="contained"
            startIcon={<ExitToApp />}
            onClick={handleLogout}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact component={DashBoardScreen} path="/" />
          <Route
            exact
            component={EditEmployeeScreen}
            path="/admin/editemployee"
          />
          <Route exact component={NewUserScreen} path="/admin/newuser" />
          <Route
            exact
            component={CreateEmployeeScreen}
            path="/admin/createemployee"
          />
          <Route
            exact
            component={CreateEmpresaScreen}
            path="/admin/newempresa"
          />
          <Route
            exact
            component={EditEmpresaScreen}
            path="/admin/editempresa"
          />
          <Route
            exact
            component={CreateEmpresaScreen}
            path="/admin/newempresa"
          />
          <Route
            exact
            component={CreateEquipmentScreen}
            path="/admin/newequipment"
          />
          <Route
            exact
            component={EditEquipmentScreen}
            path="/admin/editequipment"
          />
        </Switch>
      </main>
    </div>
  )
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}
