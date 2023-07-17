import { Container, Stack, Typography } from "@mui/material"

const Name = () => {
  return (
    <Container>
      <Typography variant="h1" component="h1">Shu Takahashi</Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="h4" component="p">tkser</Typography>
        <Typography variant="h4" component="p">tksnn</Typography>
      </Stack>
    </Container>
  )
}

export default Name
