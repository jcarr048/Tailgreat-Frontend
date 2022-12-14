import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Home = (props) => {
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
        {props.tailgates.map((tailgate) => (
          <Grid item xs={2.4} key={tailgate.id}>
            <Item>
              <img
                className="image"
                src={tailgate.image}
                alt="tailgate-img"
                onClick={() => props.chooseTailgate(tailgate)}
              ></img>
            </Item>
            <Item>{tailgate.tailgateName}</Item>
            <Item>Lot: {tailgate.lot}</Item>
            <Item>Age Required: {tailgate.age}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Home
