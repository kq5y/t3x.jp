import { Container, Divider, Typography } from "@mui/material"

const History = () => {
  return (
    <Container disableGutters sx={{marginBlock: "10px"}}>
      <Typography variant="h5" component="h1">History</Typography>
      <Divider sx={{marginBottom: "7px"}} />
      <Container>
        History
      </Container>
    </Container>
  )
}

export default History
