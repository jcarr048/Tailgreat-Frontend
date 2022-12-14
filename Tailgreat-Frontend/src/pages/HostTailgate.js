import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import { useParams, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

const HostTailgate = () => {
  let navigate = useNavigate()
  const [host, setHostList] = useState({})
  const [tailgate, setTailgate] = useState({})

  let { host_id } = useParams()

  const getHostListing = async () => {
    const res = await axios.get(`${BASE_URL}/hosts/${host_id}`)
    setHostList(res.data)
    setTailgate(res.data.owner)
  }

  useEffect(() => {
    getHostListing()
  }, [])

  const deleteTailgate = async () => {
    await axios.delete(`${BASE_URL}/tailgates/${tailgate.id}`)
    navigate('/')
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs="auto" key={tailgate.id}>
          <Item className="image">
            <img src={tailgate.image} alt="tailgate-img"></img>
          </Item>
          <Item>Tailgate Name: {tailgate.tailgateName}</Item>
          <Item>Parking Lot: {tailgate.lot}</Item>
          <Item>Age Required: {tailgate.age}</Item>
          <Item>Description: {tailgate.description}</Item>
          <Item>Food Provided: {tailgate.food}</Item>
          <Item>Alcohol Provided: {tailgate.alcohol}</Item>
          <Item>Games Provided: {tailgate.games}</Item>
          <Button variant="contained" onClick={() => deleteTailgate(tailgate)}>
            Delete Tailgate
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HostTailgate
