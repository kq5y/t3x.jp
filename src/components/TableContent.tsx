import { TableRow, TableCell } from "@mui/material";
import { ReactNode } from "react";

type TableContentProps = {
  key: string,
  name: string,
  data: ReactNode
}

const TableContent = ({ key, name, data }: TableContentProps) => {
  return (
    <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{data}</TableCell>
    </TableRow>
  );
}

export default TableContent
