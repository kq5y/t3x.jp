import { Container, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material"

type TableContentProps = {
  key: string,
  name: string,
  data: string
}

const TableContent = ({key, name, data}: TableContentProps) => {
  return (
    <TableRow key={key}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{data}</TableCell>
    </TableRow>
  );
}

const Profile = () => {
  return (
    <Container disableGutters sx={{marginBlock: "10px"}}>
      <Typography variant="h5" component="h1">Profile</Typography>
      <Divider sx={{marginBottom: "7px"}} />
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ width: "100%", minWidth: "350px" }} size="small">
            <TableBody>
              <TableContent key={"name"} name={"Name"} data={"Shu Takahashi"} />
              <TableContent key={"nickname"} name={"Nickname"} data={"tksnn, tkser"} />
              <TableContent key={"birthday"} name={"Birthday"} data={"2004/12/10"} />
              <TableContent key={"birthplace"} name={"Birth Place"} data={"Chiba, Japan"} />
              <TableContent key={"liveplace"} name={"Live Place"} data={"Nagano, Japan"} />
              <TableContent key={"hobby"} name={"Hobby"} data={"Programming, Playing Games, NicoNicoDouga"} />
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  )
}

export default Profile
