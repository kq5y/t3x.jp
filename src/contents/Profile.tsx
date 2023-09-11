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
import TableContent from '../components/TableContent'
import { SiNiconico } from "react-icons/si"
import { RiComputerFill } from 'react-icons/ri'
import { IoLogoGameControllerB } from 'react-icons/io'

const Profile = () => {
  return (
    <Container disableGutters sx={{ marginBlock: '10px' }}>
      <Typography variant="h5" component="h1">
        Profile
      </Typography>
      <Divider sx={{ marginBottom: '7px' }} />
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%', minWidth: '270px' }} size="small">
            <TableBody>
              <TableContent row_key={'name'} name={'Name'} data={'Shu Takahashi'} />
              <TableContent
                row_key={'nickname'}
                name={'Nickname'}
                data={'tksnn, tkser'}
              />
              <TableContent
                row_key={'email'}
                name={'Email'}
                data={'tkser.edu█gmail.com'}
              />
              <TableContent
                row_key={'birthday'}
                name={'Birthday'}
                data={'2004/12/10'}
              />
              <TableContent
                row_key={'birthplace'}
                name={'Birthplace'}
                data={'Chiba, Japan'}
              />
              <TableContent
                row_key={'location'}
                name={'Location'}
                data={'Nagano, Japan'}
              />
              <TableContent
                row_key={'like'}
                name={'Like'}
                data={
                  <Stack
                    direction="row"
                    gap={1.5}
                    rowGap={0.5}
                    justifyContent={'end'}
                    flexWrap={'wrap'}
                  >
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <RiComputerFill size={15} />
                      Programming
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <IoLogoGameControllerB size={15} />
                      Game
                    </Stack>
                    <Stack direction="row" alignItems={'center'} gap={0.5}>
                      <SiNiconico size={15} />
                      Nicovideo
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

export default Profile
