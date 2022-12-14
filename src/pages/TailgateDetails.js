import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
// import { useNavigate } from 'react-router-dom'
import FeedbackForm from '../components/FeedbackForm'

const TailgateDetails = (props) => {
  // const JoinTailgate = async () => {
  //   const res = await
  // }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid
        container
        spacing={3}
        my={3}
        direction="row"
        columns={3}
        rows={3}
        alignItems="center"
        justifyContent="center"
      >
        <Grid key={props.selectedTailgate.id}>
          <Item>
            <img
              className="image"
              src={props.selectedTailgate.image}
              alt="tailgate-img"
            ></img>
          </Item>
          <Item>Tailgate Name: {props.selectedTailgate.tailgateName}</Item>
          <Item>Lot: {props.selectedTailgate.lot}</Item>
          <Item>Age Required: {props.selectedTailgate.age}</Item>
          <Item>Description: {props.selectedTailgate.description}</Item>
          <Item>Food Provided: {props.selectedTailgate.food}</Item>
          <Item>Games Provided: {props.selectedTailgate.games}</Item>
        </Grid>
      </Grid>
      <FeedbackForm
        user={props.user}
        authenticated={props.authenticated}
        handleFormChange={props.handleFormChange}
        handleFormSubmit={props.handleFormSubmit}
        feedbackFromState={props.feedbackFromState}
      />
    </Box>
  )
}

export default TailgateDetails
