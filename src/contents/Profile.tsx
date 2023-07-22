import {
  Container,
  Divider,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography
} from '@mui/material'
import TableContent from '../components/TableContent'

const Profile = () => {
  return (
    <Container disableGutters sx={{ marginBlock: '10px' }}>
      <Typography variant="h5" component="h1">
        Profile
      </Typography>
      <Divider sx={{ marginBottom: '7px' }} />
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%', minWidth: '300px' }} size="small">
            <TableBody>
              <TableContent key={'name'} name={'Name'} data={'Shu Takahashi'} />
              <TableContent
                key={'nickname'}
                name={'Nickname'}
                data={'tksnn, tkser'}
              />
              <TableContent
                key={'email'}
                name={'Email'}
                data={'tkser.edu█gmail.com'}
              />
              <TableContent
                key={'birthday'}
                name={'Birthday'}
                data={'2004/12/10'}
              />
              <TableContent
                key={'birthplace'}
                name={'Birthplace'}
                data={'Chiba, Japan'}
              />
              <TableContent
                key={'location'}
                name={'Location'}
                data={'Nagano, Japan'}
              />
              <TableContent
                key={'like'}
                name={'Like'}
                data={'Programming, Playing Games, NicoNicoDouga'}
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  )
}

export default Profile
