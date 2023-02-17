import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

const rows = [
  { state: "Alabama", visited: "February 2023" },
  { state: "Alaska", visited: "March 2022" },
  { state: "Arizona", visited: "November 2020" },
  { state: "Arkansas", visited: "February 2023" },
  { state: "California", visited: "June 2021" },
  { state: "Colorado", visited: "August 2021" },
  { state: "Connecticut", visited: " January 2023" },
  { state: "Delaware", visited: "March 2022" },
  { state: "Florida", visited: "March 2020" },
  { state: "Georgia", visited: "February 2023" },
  { state: "Hawaii", visited: "June 2021" },
  { state: "Idaho", visited: "May 2017" },
  { state: "Illinois", visited: "October 2021" },
  { state: "Indiana", visited: "June 2022" },
  { state: "Iowa", visited: "June 2022" },
  { state: "Kansas", visited: "June 2022" },
  { state: "Kentucky", visited: "September 2017" },
  { state: "Louisiana", visited: "January 2022" },
  { state: "Maine", visited: "September 2020" },
  { state: "Maryland", visited: "May 2021" },
  { state: "Massachusetts", visited: "August 2017" },
  { state: "Michigan", visited: "August 2022" },
  { state: "Minnesota", visited: "August 2022" },
  { state: "Mississippi", visited: "February 2023" },
  { state: "Missouri", visited: "June 2022" },
  { state: "Montana", visited: "February 2022" },
  { state: "Nebraska", visited: "June 2022" },
  { state: "Nevada", visited: "March 2019" },
  { state: "New Hampshire", visited: "January 2023" },
  { state: "New Jersey", visited: "January 2017" },
  { state: "New Mexico", visited: "November 2020" },
  { state: "New York", visited: "September 2022" },
  { state: "North Carolina", visited: "June 2022" },
  { state: "North Dakota", visited: "August 2022" },
  { state: "Ohio", visited: "May 2019" },
  { state: "Oklahoma", visited: "February 2023" },
  { state: "Oregon", visited: "October 2021" },
  { state: "Pennsylvania", visited: "November 2022" },
  { state: "Rhode Island", visited: "January 2023" },
  { state: "South Carolina", visited: "July 2022" },
  { state: "South Dakota", visited: "June 2022" },
  { state: "Tennessee", visited: "November 2021" },
  { state: "Texas", visited: "March 2022" },
  { state: "Utah", visited: "March 2019" },
  { state: "Vermont", visited: "March 2021" },
  { state: "Virginia", visited: "December 2022" },
  { state: "Washington", visited: "August 2022" },
  { state: "West Virginia", visited: "June 2022" },
  { state: "Wisconsin", visited: "October 2021" },
  { state: "Wyoming", visited: "May 2017" },
]

export default function StatesVisited() {
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
