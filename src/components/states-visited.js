import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

export default function StatesVisited({ rows }) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "13px" }}>State</TableCell>
              <TableCell sx={{ fontSize: "13px" }} align="right">
                Month + Year visited
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.state}>
                <TableCell component="th" scope="row" sx={{ fontSize: "13px" }}>
                  {row.state}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "13px" }}>
                  {row.visited}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
