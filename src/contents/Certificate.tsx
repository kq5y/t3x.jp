import { Box, Card, CardContent, Chip, Container, Divider, Stack, Typography } from '@mui/material'
import { useRef, useMemo } from 'react'
import useElementSize from '../utils/useElementSize'

const Certificate = () => {
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
        Certificate
      </Typography>
      <Divider sx={{ marginBottom: '7px' }} />
      <Container ref={containerRef}>
        <Box display="flex" flexWrap="wrap">
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" gutterBottom>
                  基本情報技術者試験 合格
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="2021/02" size="small" />
                  <Chip label="IPA" size="small" variant="outlined" />
                  <Chip label="情報処理" size="small" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" gutterBottom>
                  実用英語技能検定 準2級 合格
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="2021/06" size="small" />
                  <Chip label="英語" size="small" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box width={cardBoxWidth} p={.5}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography component="div" variant="h6" gutterBottom>
                  応用情報技術者試験 合格
                </Typography>
                <Stack
                  direction="row"
                  gap={1}
                  rowGap={0.5}
                  sx={{ mb: 0.5 }}
                  width={'100%'}
                  flexWrap={'wrap'}
                >
                  <Chip label="2023/10" size="small" />
                  <Chip label="IPA" size="small" variant="outlined" />
                  <Chip label="情報処理" size="small" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Certificate
