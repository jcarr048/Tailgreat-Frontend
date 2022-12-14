import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Home = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#800020' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#800020'
  }))
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        my={4}
        spacing={3}
        rows={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {props.tailgates.map((tailgate) => (
          <Grid item xs zeroMinWidth key={tailgate.id}>
            <Item>
              <img
                className="image"
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
