import Grid from '@mui/material/Grid' // Grid version 1
import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import FeedbackForm from '../components/FeedbackForm'

const TailgateDetails = (props) => {
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
    <Box sx={{ flexGrow: 2 }} bgcolor={'#D8D8D8'}>
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
