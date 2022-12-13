import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const Home = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} columns={12}>
        {props.tailgates.map((tailgate) => (
          <Grid item sm={4} key={tailgate.id}>
            <Item className="image">
              <img src={tailgate.image} alt="tailgate-img" />
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
// {
//   ;<div className="home-page">
//     <h2>Select a Tailgate</h2>
//     <div className="tailgate-grid">
//       {props.tailgates.map((tailgate) => (
//         <div className="tailgate-card" key={tailgate.id}>
//           <div onClick={() => props.chooseTailgate(tailgate)}>
//             <img src={tailgate.image} alt="tailgate-img" />
//             <div className="tailgate-name">
//               Tailgate Name: {tailgate.tailgateName}
//             </div>
//             <div className="tailgate-lot">Tailgate Lot: {tailgate.lot}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// }
