import { TableRow, TableCell } from '@mui/material'
import { ReactNode } from 'react'

type TableContentProps = {
  row_key: string
  name: string
  data: ReactNode
}

const TableContent = ({ row_key, name, data }: TableContentProps) => {
  return (
    <TableRow
      key={row_key}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{data}</TableCell>
    </TableRow>
  )
}

export default TableContent
