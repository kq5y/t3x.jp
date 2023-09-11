import {
  Chip,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Typography,
  Box,
  IconButton
} from '@mui/material'
import { useMemo, useRef } from 'react'
import useElementSize from '../utils/useElementSize'
import { SiGithub } from 'react-icons/si'
import { RiHashtag } from 'react-icons/ri'

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth] = useElementSize(containerRef)
  const cardBoxWidth = useMemo(() => {
    if (containerWidth < 700) return `${100}%`
    if (containerWidth < 1050) return `${100 / 2}%`
    return `${100 / 3}%`
  }, [containerWidth])
  return (
    <Container disableGutters sx={{ marginBlock: '10px' }}>
      <Typography variant="h5" component="h1">
        Works
      </Typography>
      <Divider sx={{ marginBottom: '7px' }} />
      <Container ref={containerRef}>
        <Box display="flex" flexWrap="wrap">
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Stack
                  direction="row"
                >
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ mb: 0.5 }}
                    gutterBottom
                  >
                    next-note
                  </Typography>
                  <div style={{ flexGrow: 1 }}></div>
                  <IconButton
                    href="https://note.t3xn.net"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                  >
                    <RiHashtag size={20} />
                  </IconButton>
                  <IconButton
                    href="https://github.com/tkser/next-note"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                  >
                    <SiGithub size={20} />
                  </IconButton>
                </Stack>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="TypeScript" size="small" />
                  <Chip label="Next.js" size="small" variant="outlined" />
                  <Chip label="PostrageSQL" size="small" variant="outlined" />
                  <Chip label="Vercel" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  ノートを取るためのWebアプリケーション
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Stack
                  direction="row"
                >
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ mb: 0.5 }}
                    gutterBottom
                  >
                    Portfolio
                  </Typography>
                  <div style={{ flexGrow: 1 }}></div>
                  <IconButton
                    href="https://portfolio.t3xn.net"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                  >
                    <RiHashtag size={20} />
                  </IconButton>
                  <IconButton
                    href="https://github.com/tkser/portfolio"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                  >
                    <SiGithub size={20} />
                  </IconButton>
                </Stack>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="TypeScript" size="small" />
                  <Chip label="React" size="small" variant="outlined" />
                  <Chip label="Cloudflare" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  ポートフォリオサイト(このサイト)
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Stack
                  direction="row"
                >
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ mb: 0.5 }}
                    gutterBottom
                  >
                    Titanic Checker
                  </Typography>
                  <div style={{ flexGrow: 1 }}></div>
                  <IconButton
                    href="https://titanic-checker.pages.dev"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                  >
                    <RiHashtag size={20} />
                  </IconButton>
                  <IconButton
                    href="https://github.com/tkser/titanic-checker-front"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                    title='Frontend'
                  >
                    <SiGithub size={20} />
                  </IconButton>
                  <IconButton
                    href="https://github.com/tkser/titanic-checker-api"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                    title='Backend'
                  >
                    <SiGithub size={20} />
                  </IconButton>
                </Stack>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="TypeScript" size="small" />
                  <Chip label="Python" size="small" />
                  <Chip label="React" size="small" variant="outlined" />
                  <Chip label="Cloudflare" size="small" variant="outlined" />
                  <Chip label="FastAPI" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  TitanicDatasetを用いた機械学習モデルの精度を確認するためのWebアプリケーション
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ mb: 0.5 }}
                  gutterBottom
                >
                  NyanJump
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="C++" size="small" />
                  <Chip label="OpenSiv3D" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  高校の文化祭で展示した2Dアクションゲーム
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ mb: 0.5 }}
                  gutterBottom
                >
                  GameLauncher2021
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="C++" size="small" />
                  <Chip label="OpenSiv3D" size="small" variant="outlined" />
                  <Chip label="MySQL" size="small" variant="outlined" />
                  <Chip label="PHP" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  高校の文化祭で使用したゲームランチャー
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ mb: 0.5 }}
                  gutterBottom
                >
                  W-Judge
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="Python" size="small" />
                  <Chip label="Flask" size="small" variant="outlined" />
                  <Chip label="MySQL" size="small" variant="outlined" />
                  <Chip label="NGINX" size="small" variant="outlined" />
                  <Chip label="Docker" size="small" variant="outlined" />
                  <Chip label="DockerCompose" size="small" variant="outlined" />
                  <Chip label="Redis" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  高校の部内で利用した競プロコンテストサイト
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ mb: 0.5 }}
                  gutterBottom
                >
                  Scraping Application
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="Python" size="small" />
                  <Chip label="Tk" size="small" variant="outlined" />
                  <Chip label="Selenium" size="small" variant="outlined" />
                  <Chip label="C#" size="small" variant="outlined" />
                  <Chip label="WPF" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  業務委託で開発したWindows用のスクレイピングソフト
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ mb: 0.5 }}
                  gutterBottom
                >
                  Chrome Extention
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="TypeScript" size="small" />
                  <Chip label="React" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  コミュニティー用に開発したブラウザ拡張機能
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ mb: 0.5 }}
                  gutterBottom
                >
                  Web 2D Game
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="TypeScript" size="small" />
                  <Chip label="AkashicEngine" size="small" variant="outlined" />
                </Stack>
                <Typography variant="body2">
                  ニコニコ生放送用に開発した小規模ゲーム
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Works
