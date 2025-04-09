import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { setPdfModal } from "../store/slices/toggleSlice";
import PDFModal from "./PDFModal";
import { useInvoiceTable } from "../hooks/useInvoiceTable";

export default function BasicInvoiceTable() {
  const { invId, setInvId, dispatch, rows} = useInvoiceTable()

  return (
    <>
      <PDFModal invId={invId} />
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
                View
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
                <TableCell align="center">$ {row.payment}</TableCell>
                <TableCell align="center">$ {row.toatalPay}</TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body1"
                    sx={{ cursor: "pointer", color: "primary.main" }}
                  >
                    <FullscreenIcon
                      sx={{ fontSize: 20 }}
                      onClick={() => {
                        setInvId(row.invoiceId);
                        dispatch(setPdfModal(true));
                      }}
                    />
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
