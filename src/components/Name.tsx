import { Grid, Stack, Typography, useMediaQuery } from "@mui/material"

const Name = () => {
  const isWideScreen = useMediaQuery('(min-width: 950px)');
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} direction={"column"} style={{ height: '100%' }}>
      <Grid item sx={{width: "min-content"}}>
        <Typography variant="h1" component="h1" sx={{display: "inline", whiteSpace: isWideScreen ? "inherit" : "nowrap"}}>
          Shu Takahashi
        </Typography>
        <Stack direction="row" spacing={2} sx={{display: "inline-flex"}}>
            <Typography variant="h4" component="p">tkser</Typography>
            <Typography variant="h4" component="p">tksnn</Typography>
          </Stack>
      </Grid>
    </Grid>
  )
}

export default Name
