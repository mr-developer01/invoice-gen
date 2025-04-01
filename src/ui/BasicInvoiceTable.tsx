import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import { selectInvoices } from "../store/slices/invoiceSlice";

function createData(
  date: string,
  clientId: string,
  invoiceId: string,
  payment: string,
  toatalPay: string,
  services: string
) {
  return { date, clientId, invoiceId, payment, toatalPay, services };
}

export default function BasicInvoiceTable() {
  const invoices = useAppSelector(selectInvoices);
  // console.log(invoices, "Basic Invoice Table")

  const row = invoices
    .filter((client) => client.date !== "")
    .map((client) => {
      return createData(
        client?.date,
        client?.clientId,
        client?.id,
        client?.payment?.totalAmount,
        client?.payment?.remaining,
        client?.services[0]?.description
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
      <Table
        sx={{ minWidth: 650, position: "relative" }}
        stickyHeader
        aria-label="simple table"
      >
        <TableHead sx={{}}>
          <TableRow>
            <TableCell>Invoice Id</TableCell>
            <TableCell padding="none" align="center">
              Description
            </TableCell>
            <TableCell padding="none" align="center">
              T. Payment
            </TableCell>
            <TableCell padding="none" align="center">
              R. Payment
            </TableCell>
            <TableCell padding="none" align="center">
              Update
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.invoiceId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.invoiceId}
              </TableCell>
              <TableCell align="center">{row.services}</TableCell>
              <TableCell align="center">{row.payment}</TableCell>
              <TableCell align="center">{row.toatalPay}</TableCell>
              <TableCell align="center">
                <Typography
                  variant="body1"
                  sx={{ cursor: "pointer", color: "primary.main" }}
                >
                  update
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
