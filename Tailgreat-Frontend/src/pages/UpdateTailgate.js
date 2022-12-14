import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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

const UpdateTailgate = ({ host }) => {
  let { tailgate_id } = useParams()
  const [formState, setFormState] = useState()
  const [tailgateDetails, setTailgateDetails] = useState([])
  const navigate = useNavigate()

  const UpdateTailgateDetails = async () => {
    const res = await axios.get(`${BASE_URL}/tailgates/${tailgate_id}`)
    setTailgateDetails(res.data)
    setFormState({
      image: res.data.image,
      tailgateName: res.data.tailgateName,
      lot: res.data.lot,
      age: res.data.age,
      alcohol: res.data.alcohol,
      description: res.data.description,
      food: res.data.food,
      games: res.data.games
    })
  }
  useEffect(() => {
    UpdateTailgateDetails()
  }, [])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BASE_URL}/tailgates/${tailgate_id}`, formState)
    navigate('/hosttailgate/host_id')
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
                  fullWidth
                  id="image"
                  value={formState.image}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  name="tailgateName"
                  fullWidth
                  id="tailgateName"
                  value={formState.tailgateName}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  name="lot"
                  required
                  value={formState.lot}
                  onChange={handleChange}
                  fullWidth
                  id="lot"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  name="age"
                  required
                  fullWidth
                  id="age"
                  value={formState.age}
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>

              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  fullWidth
                  id="alcohol"
                  value={formState.alcohol}
                  onChange={handleChange}
                  name="alcohol"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  type="description"
                  id="description"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  fullWidth
                  name="food"
                  value={formState.food}
                  onChange={handleChange}
                  type="food"
                  id="food"
                />
              </Grid>
              <Grid item xs={22} sm={14}>
                <TextField
                  required
                  fullWidth
                  name="games"
                  value={formState.games}
                  onChange={handleChange}
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
                Update Tailgate
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default UpdateTailgate
