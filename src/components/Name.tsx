import { SiGithub, SiKaggle } from "@icons-pack/react-simple-icons";
import { Avatar, Grid, IconButton, Stack, Typography, useMediaQuery } from "@mui/material"
import SiAtCoder from "../extend-icons/icons/SiAtcoder";

const Name = () => {
  const isWideScreen = useMediaQuery('(min-width: 950px)');
  return (
    <Grid container alignItems={"center"} justifyContent={"center"} direction={"column"} style={{ height: '100%' }} marginTop={1} marginBottom={1}>
      <Grid item sx={{ width: "100%" }}>
        <Stack direction={isWideScreen ? "column" : "row"} justifyContent={isWideScreen ? "center" : "flex-start"} alignItems={"center"} gap={3} ml={isWideScreen ? "inherit" : 2} mr={isWideScreen ? "inherit" : 2} >
          <Avatar sx={isWideScreen ? { width: "50%", maxWidth: "250px", aspectRatio: "1/1", height: "auto" } : {display: "none"}} src="https://avatars.githubusercontent.com/u/46104508" />
          <Typography variant={isWideScreen ? "h3" : "h5"} component="h1">{isWideScreen ? "tksnn" : "tksnn's Portfolio"}</Typography>
          <Stack direction={"row"} gap={1} ml={isWideScreen ? undefined : "auto"}>
            <IconButton href="https://github.com/tkser" target="_blank" rel="noreferrer noopener">
              <SiGithub size={25} />
            </IconButton>
            <IconButton href="https://www.kaggle.com/tksnnn" target="_blank" rel="noreferrer noopener">
              <SiKaggle size={25} />
            </IconButton>
            <IconButton href="https://atcoder.jp/users/tksnn" target="_blank" rel="noreferrer noopener">
              <SiAtCoder size={25} />
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Name
