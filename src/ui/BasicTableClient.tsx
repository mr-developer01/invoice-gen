import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectClients } from "../store/slices/updateClientSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ConfirmModal from "./ConfirmModal";
import { setRemoveClientModal } from "../store/slices/toggleSlice";
import { useState } from "react";

function createData(
  name: string,
  email: string,
  phone: string,
  address: string,
  id: string
) {
  return { name, email, phone, address, id };
}

export default function BasicTable() {
  const [clientId, SetClientId] = useState('')
  const clients = useAppSelector(selectClients);
  const dispatch = useAppDispatch();

  const row = clients.map((client) => {
    return createData(
      client.name,
      client.email,
      client.phone,
      client.address,
      client.id
    );
  });

  const rows = [...row];

  return (
    <TableContainer
      component={Paper}
      sx={{
        maxHeight: 248,
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        "scrollbar-width": "none",
      }}
    >
      <ConfirmModal clientId={clientId} />
      <Table
        sx={{ minWidth: 650, position: "relative" }}
        stickyHeader
        aria-label="simple table"
      >
        <TableHead sx={{}}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell padding="none" align="center">
              Email
            </TableCell>
            <TableCell padding="none" align="center">
              Phone
            </TableCell>
            <TableCell padding="none" align="center">
              Address
            </TableCell>
            <TableCell padding="none" align="center">
              Remove
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">
                <Typography
                  variant="body1"
                  sx={{ cursor: "pointer", color: "primary.main" }}
                  onClick={() => {
                    dispatch(setRemoveClientModal(true))
                    SetClientId(row.id)
                  }}
                >
                  <DeleteOutlineIcon sx={{ fontSize: 20 }} />
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
