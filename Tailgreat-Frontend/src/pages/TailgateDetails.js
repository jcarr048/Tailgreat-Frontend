import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'
// import { useNavigate } from 'react-router-dom'

const TailgateDetails = () => {
  // let navigate = useNavigate()
  const [tailgateDetails, setTailgateDetails] = useState([])
  let { tailgate_id } = useParams()

  const GetTailgateDetails = async () => {
    const res = await axios.get(`${BASE_URL}/tailgates/${tailgate_id}`)
    setTailgateDetails(res.data)
  }

  useEffect(() => {
    GetTailgateDetails()
  }, [])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} columns={12}>
        <Grid key={tailgateDetails.id}>
          <Item className="image">
            <img src={tailgateDetails.image} alt="tailgate-img"></img>
          </Item>
          <Item>{tailgateDetails.tailgateName}</Item>
          <Item>{tailgateDetails.lot}</Item>
          <Item>{tailgateDetails.age}</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TailgateDetails
