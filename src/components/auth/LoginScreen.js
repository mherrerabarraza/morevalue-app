import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core"
import React from "react"
import { useDispatch } from "react-redux"
import { startLoginEmailPassword } from "../../actions/auth"
import { useForm } from "../../hooks/useForm"
import "./signin.css"

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  })

  const { email, password } = formValues

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))
  }
  return (
    <Container maxWidth="xs" component="main">
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ingresar
          </Button>
        </form>
      </div>
    </Container>
  )
}
