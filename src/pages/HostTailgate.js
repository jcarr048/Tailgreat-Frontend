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
    backgroundColor: 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontFamily: 'Verdana',
    textDecoration: 'solid',
    color: '#800020'
  }))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        my={1}
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        object-fit="contain"
        bgcolor={'#D8D8D8'}
      >
        <Grid item xs={2.4} key={tailgate.id}>
          <Item>
            <img
              className="image"
              src={tailgate?.image}
              alt="tailgate-img"
            ></img>
          </Item>
          <Item>Tailgate Name: {tailgate?.tailgateName}</Item>
          <Item>Parking Lot: {tailgate?.lot}</Item>
          <Item>Age Required: {tailgate?.age}</Item>
          <Item>Description: {tailgate?.description}</Item>
          <Item>Food Provided: {tailgate?.food}</Item>
          <Item>Alcohol Provided: {tailgate?.alcohol}</Item>
          <Item>Games Provided: {tailgate?.games}</Item>
          <Button
            variant="contained"
            spacing={1}
            onClick={() => deleteTailgate(tailgate)}
          >
            Delete Tailgate
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate(`/updatetailgate/${host_id}`)}
          >
            Update Tailgate
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HostTailgate
