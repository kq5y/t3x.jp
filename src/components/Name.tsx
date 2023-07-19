import { Avatar, Grid, Stack, Typography, useMediaQuery } from "@mui/material"

const Name = () => {
  const isWideScreen = useMediaQuery('(min-width: 950px)');
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} direction={"column"} style={{ height: '100%' }} marginTop={1} marginBottom={1}>
      <Grid item sx={{ width: "100%" }}>
        <Stack direction={isWideScreen ? "column" : "row"} justifyContent={isWideScreen ? "center" : "flex-start"} alignItems={"center"} gap={3} marginLeft={isWideScreen ? "inherit" : 2} >
          <Avatar sx={isWideScreen ? { width: "50%", maxWidth: "250px", aspectRatio: "1/1", height: "auto" } : {}} src="https://avatars.githubusercontent.com/u/46104508" />
          <Typography variant={isWideScreen ? "h3" : "h4"} component="h1">tksnn</Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Name
