import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startLoginEmailPassword } from '../../actions/auth'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '350px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export const SignIn = () => {
  const classes = useStyles()

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <img
            className={classes.logo}
            src="../../assets/mvlogo.svg"
            alt="More Value"
          ></img>
        </div>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="Correo Electrónico"
            required
            autoFocus
            onChange={handleInputChange}
            value={email}
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            id="password"
            name="password"
            margin="normal"
            placeholder="Contraseña"
            required
            onChange={handleInputChange}
            value={password}
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
        </form>
      </div>
    </Container>
  )
}
