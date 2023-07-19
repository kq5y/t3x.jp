import { Container, Divider, Typography } from "@mui/material"

const Works = () => {
  return (
    <Container disableGutters sx={{marginBlock: "10px"}}>
      <Typography variant="h5" component="h1">Works</Typography>
      <Divider sx={{marginBottom: "7px"}} />
      <Container>
        Works
      </Container>
    </Container>
  )
}

export default Works
