import { Chip, Card, CardContent, Container, Divider, Stack, Typography, Box } from "@mui/material"
import { useMemo, useRef } from "react"
import useElementSize from "../utils/useElementSize"

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, ] = useElementSize(containerRef);
  const cardBoxWidth = useMemo(() => {
    if (containerWidth < 700) return `${100}%`
    if (containerWidth < 1050) return `${100 / 2}%`
    return `${100 / 3}%`
  }, [containerWidth])
  return (
    <Container disableGutters sx={{marginBlock: "10px"}}>
      <Typography variant="h5" component="h1">Works</Typography>
      <Divider sx={{marginBottom: "7px"}} />
      <Container ref={containerRef}>
        <Box display="flex" flexWrap="wrap">
          <Box width={cardBoxWidth} p={1}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" sx={{ mb: .5 }} gutterBottom>NyanJump</Typography>
                <Stack direction="row" gap={1} rowGap={.5} sx={{ mb: .5 }} width={"100%"} flexWrap={"wrap"}>
                  <Chip label="C++" size="small" />
                  <Chip label="OpenSiv3D" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">高校の文化祭で展示した2Dアクションゲーム</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={1}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" sx={{ mb: .5 }} gutterBottom>GameLauncher2021</Typography>
                <Stack direction="row" gap={1} rowGap={.5} sx={{ mb: .5 }} width={"100%"} flexWrap={"wrap"}>
                  <Chip label="C++" size="small" />
                  <Chip label="OpenSiv3D" size="small" variant="outlined" />
                  <Chip label="MySQL" size="small" variant="outlined" />
                  <Chip label="PHP" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">高校の文化祭で使用したゲームランチャー</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={1}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" sx={{ mb: .5 }} gutterBottom>W-Judge</Typography>
                <Stack direction="row" gap={1} rowGap={.5} sx={{ mb: .5 }} width={"100%"} flexWrap={"wrap"}>
                  <Chip label="Python" size="small" />
                  <Chip label="Flask" size="small" variant="outlined" />
                  <Chip label="MySQL" size="small" variant="outlined" />
                  <Chip label="NGINX" size="small" variant="outlined" />
                  <Chip label="Docker" size="small" variant="outlined" />
                  <Chip label="DockerCompose" size="small" variant="outlined" />
                  <Chip label="Redis" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">高校の部内で利用した競プロコンテストサイト</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={1}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" sx={{ mb: .5 }} gutterBottom>Scraping Application</Typography>
                <Stack direction="row" gap={1} rowGap={.5} sx={{ mb: .5 }} width={"100%"} flexWrap={"wrap"}>
                  <Chip label="Python" size="small" />
                  <Chip label="Tk" size="small" variant="outlined" />
                  <Chip label="Selenium" size="small" variant="outlined" />
                  <Chip label="C#" size="small" variant="outlined" />
                  <Chip label="WPF" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">業務委託で開発したWindows用のスクレイピングソフト</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={1}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" sx={{ mb: .5 }} gutterBottom>Chrome Extention</Typography>
                <Stack direction="row" gap={1} rowGap={.5} sx={{ mb: .5 }} width={"100%"} flexWrap={"wrap"}>
                  <Chip label="TypeScript" size="small" />
                  <Chip label="React" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">コミュニティー用に開発したブラウザ拡張機能</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={1}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" sx={{ mb: .5 }} gutterBottom>Web 2D Game</Typography>
                <Stack direction="row" gap={1} rowGap={.5} sx={{ mb: .5 }} width={"100%"} flexWrap={"wrap"}>
                  <Chip label="TypeScript" size="small" />
                  <Chip label="AkashicEngine" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">ニコニコ生放送用に開発した小規模ゲーム</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Works
