import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

const rows = [
  { country: "Argentina", visited: "January 2020" },
  { country: "Bahamas", visited: "January 2016" },
  { country: "Canada", visited: "October 2019" },
  { country: "Chile", visited: "January 2020" },
  { country: "China", visited: "August 2016" },
  { country: "Finland", visited: "May 2022" },
  { country: "Iceland", visited: "December 2022" },
  { country: "Japan", visited: "August 2016" },
  { country: "Morocco", visited: "November 2018" },
  { country: "Netherlands", visited: "November 2018" },
  { country: "Norway", visited: "May 2022" },
  { country: "Oman", visited: "November 2021" },
  { country: "Peru", visited: "January 2020" },
  { country: "Philippines", visited: "December 2018" },
  { country: "South Korea", visited: "October 2022" },
  { country: "Spain", visited: "November 2018" },
  { country: "Sweden", visited: "May 2022" },
  { country: "United Arab Emirates", visited: "November 2021" },
  { country: "United Kingdom", visited: "May 2022" },
  { country: "United States of America", visited: "Present" },
  { country: "Vietnam", visited: "January 2019" },
]

export default function CountriesVisited() {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "13px" }}>Country</TableCell>
              <TableCell sx={{ fontSize: "13px" }} align="right">
                Month + Year visited
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.country}>
                <TableCell component="th" scope="row" sx={{ fontSize: "13px" }}>
                  {row.country}
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
