import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const CreateTailgate = ({ host }) => {
  const navigate = useNavigate()
  const initialState = {
    image: '',
    tailgateName: '',
    lot: '',
    age: '',
    alcohol: '',
    description: '',
    food: '',
    games: ''
  }
  const [formValues, setFormValues] = useState({
    initialState
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/tailgates/create/${host.id}`, formValues)
    setFormValues(initialState)
    navigate('/mytailgate')
  }

  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tailgate Registration
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={22} sm={14}>
                <TextField
                  name="image"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="image"
                  label="Upload a picture of your tailgate!"
                  autoFocus
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  name="tailgateName"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="tailgateName"
                  label="What is your tailgate's name?"
                  autoFocus
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  name="lot"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="lot"
                  label="Which lot are you located in?"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  name="age"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="age"
                  label="How old must attendees be?"
                  autoFocus
                />
              </Grid>

              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  id="alcohol"
                  label="What, if any, alcohol will you provide?"
                  name="alcohol"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="description"
                  label="Give a short description"
                  type="description"
                  id="description"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="food"
                  label="What food will be provided?"
                  type="food"
                  id="food"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  onChange={handleChange}
                  fullWidth
                  name="games"
                  label="What games will be provided?"
                  type="games"
                  id="games"
                />
              </Grid>
            </Grid>
            <Link to="/">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create Tailgate!
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default CreateTailgate
