import {
  Container,
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  Typography
} from '@mui/material'
import {
  SiCentos,
  SiCloudflare,
  SiCplusplus,
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiFlask,
  SiGit,
  SiHeroku,
  SiJavascript,
  SiMacos,
  SiMysql,
  SiOracle,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiWindows11
} from '@icons-pack/react-simple-icons'
import TableContent from '../components/TableContent'
import { SiSiv3d } from '../extend-icons'
import SiAkashicEngine from '../extend-icons/icons/SiAkashicEngine'

const Skills = () => {
  return (
    <Container disableGutters sx={{ marginBlock: '10px' }}>
      <Typography variant="h5" component="h1">
        Skills
      </Typography>
      <Divider sx={{ marginBottom: '7px' }} />
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%', minWidth: '300px' }} size="small">
            <TableBody>
              <TableContent
                key={'lang'}
                name={'Language'}
                data={
                  <Stack
                    direction="row"
                    gap={1}
                    rowGap={0.5}
                    justifyContent={'end'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiCplusplus size={15} />
                      C++
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiPython size={15} />
                      Python
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiCsharp size={15} />
                      C#
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiTypescript size={15} />
                      TypeScript
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiJavascript size={15} />
                      JavaScript
                    </Stack>
                  </Stack>
                }
              />
              <TableContent
                key={'framework'}
                name={'Framework'}
                data={
                  <Stack
                    direction="row"
                    gap={1}
                    rowGap={0.5}
                    justifyContent={'end'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiReact size={15} />
                      React
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiFlask size={15} />
                      Flask
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiFastapi size={15} />
                      FastAPI
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiRedis size={15} />
                      Redis
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiScikitlearn size={15} />
                      sk-learn
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiSiv3d size={15} />
                      OpenSiv3D
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiAkashicEngine size={15} />
                      AkashicEngine
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiDotnet size={15} />
                      WPF
                    </Stack>
                  </Stack>
                }
              />
              <TableContent
                key={'environment'}
                name={'Environment'}
                data={
                  <Stack
                    direction="row"
                    gap={1}
                    rowGap={0.5}
                    justifyContent={'end'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiGit size={15} />
                      Git
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiDocker size={15} />
                      Docker
                    </Stack>
                  </Stack>
                }
              />
              <TableContent
                key={'database'}
                name={'Database'}
                data={
                  <Stack
                    direction="row"
                    gap={1}
                    rowGap={0.5}
                    justifyContent={'end'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiMysql size={15} />
                      MySQL
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiPostgresql size={15} />
                      PostgreSQL
                    </Stack>
                  </Stack>
                }
              />
              <TableContent
                key={'cloud'}
                name={'Cloud'}
                data={
                  <Stack
                    direction="row"
                    gap={1}
                    rowGap={0.5}
                    justifyContent={'end'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiOracle size={15} />
                      OCI
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiHeroku size={15} />
                      Heroku
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiVercel size={15} />
                      Vercel
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiCloudflare size={15} />
                      Cloudflare
                    </Stack>
                  </Stack>
                }
              />
              <TableContent
                key={'os'}
                name={'OS'}
                data={
                  <Stack
                    direction="row"
                    gap={1}
                    rowGap={0.5}
                    justifyContent={'end'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiWindows11 size={15} />
                      Windows
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiMacos size={15} />
                      macOS
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiUbuntu size={15} />
                      Ubuntu
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiCentos size={15} />
                      CentOS
                    </Stack>
                  </Stack>
                }
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  )
}

export default Skills
