import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Home = (props) => {
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
        {props.tailgates.map((tailgate) => (
          <Grid item sm={6} key={tailgate.id}>
            <Item className="image">
              <img
                src={tailgate.image}
                alt="tailgate-img"
                onClick={() => props.chooseTailgate(tailgate)}
              ></img>
            </Item>
            <Item>{tailgate.tailgateName}</Item>
            <Item>{tailgate.lot}</Item>
            <Item>{tailgate.age}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home
