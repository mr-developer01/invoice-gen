import { Stack, Typography } from "@mui/material";
import SearchUserByEmail from "../forms/SearchUserByEmail";
import { useAppSelector } from "../../store/hooks";
import { selectClient } from "../../store/slices/updateClientSlice";
import AddService from "../core/AddService";
import AddPayment from "../core/AddPayment";

const Invoices = () => {
  const searchedClient = useAppSelector(selectClient);
  console.log(searchedClient)
  return (
    <>
      <SearchUserByEmail />
      {searchedClient && (
        <Typography mt={2}>
          Add Services / Payment for : {searchedClient[0]?.name}
        </Typography>
      )}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        sx={{
          width: "100%",
          alignItems: "start",
          justifyContent: "center",
          mt: 6,
        }}
      >
        <AddService />
        <AddPayment />
      </Stack>
    </>
  );
};

export default Invoices;
