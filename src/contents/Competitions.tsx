import { Box, Card, CardContent, Chip, Container, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useRef, useMemo } from 'react'
import useElementSize from '../utils/useElementSize'
import { SiGithub } from 'react-icons/si'
import { SiSignate } from '../extend-icons'

const Competitions = () => {
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
        Competitions
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
                    signate_scup2023
                  </Typography>
                  <div style={{ flexGrow: 1 }}></div>
                  <IconButton
                    href="https://signate.jp/competitions/1051"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ marginBottom: '4px' }}
                  >
                    <SiSignate size={20} />
                  </IconButton>
                  <IconButton
                    href="https://github.com/tkser/signate_scup2023"
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
                    <Chip label="2023/8" size="small" />
                    <Chip label="SIGNATE" size="small" variant="outlined" />
                    <Chip label="テーブル" size="small" variant="outlined" />
                    <Chip label="42th" size="small" variant="outlined" />
                  </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Competitions
